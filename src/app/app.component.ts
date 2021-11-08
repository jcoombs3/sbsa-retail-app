import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sbsa-retail-app';

  constructor(private oAuthService: OAuthService) {}

  logout(): void {
    this.oAuthService.logOut(true);
  }
}
