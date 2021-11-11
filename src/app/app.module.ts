import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NotificationModule,
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
