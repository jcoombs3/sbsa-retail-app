import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// LOCALE configuration
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAf from '@angular/common/locales/af';
registerLocaleData(localeAf);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment, authConfig } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {
  AuthConfig,
  OAuthModule,
  OAuthModuleConfig,
  OAuthService,
  OAuthStorage,
} from 'angular-oauth2-oidc';
import { AuthGuard } from './guards/auth.guard';
import { NotificationModule } from '@backbase/ui-ang';

// Transfers
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PayordStopChecksWidgetAngModule } from '@backbase/payord-stop-checks-widget-ang';
import { TransferInternalJourneyAngModule } from '@sbsa/transfer-internal-journey-ang';
import { ItemModel } from '@backbase/foundation-ang/core';
import { of } from 'rxjs';

export class CustomItemModel {
  constructor() {}

  property(propertyName: string) {
    console.log('++ AppModuleCustomItemModel.property', propertyName);
    switch (propertyName) {
      case 'resourceName':
        return of('Payments');
        break;
      case 'businessFunction':
        return of('Stop Checks');
        break;
      case 'privilege':
        return of('create');
        break;
      case 'notificationDismissTime':
        return of('3');
        break;
      case 'currencies':
        return of('USD');
        break;
      case 'checksRangeNumber':
        return of('0');
        break;
      default:
        return of(undefined);
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BackbaseCoreModule.forRoot({
      assets: {
        assetsStaticItemName: '',
      },
      classMap: {},
      logDeprecations: true,
      features: {
        EXTRA_ENCODE_URI_PARAMS: true,
        ACTION_RECIPES_UNIQUE_CONSTRAINT_ENDPOINTS: true,
        ENFORCE_INJECTOR_FOR_CREATE_STORE: true,
        SELECT_CONTEXT_INNER_CONTAINER: true,
      },
    }),
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    OAuthModule.forRoot(),
    NotificationModule,
    //TransferInternalJourneyAngModule,
    PayordStopChecksWidgetAngModule,
  ],
  providers: [
    ...(environment.mockProviders || []),
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'af' },
    { provide: AuthConfig, useValue: authConfig },
    {
      provide: OAuthModuleConfig,
      useValue: {
        resourceServer: {
          allowedUrls: ['http://www.angular.at/api'],
          sendAccessToken: true,
        },
      },
    },
    { provide: OAuthStorage, useFactory: () => localStorage },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [OAuthService],
      useFactory: (oAuthService: OAuthService) => () =>
        oAuthService.loadDiscoveryDocumentAndTryLogin(),
    },
    // fake portal dependency (WA3)
    {
      provide: ItemModel,
      useClass: CustomItemModel,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
