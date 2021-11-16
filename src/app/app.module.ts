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

import { BackbaseCoreModule } from '@backbase/foundation-ang/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    OAuthModule.forRoot(),
    NotificationModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
