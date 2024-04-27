import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environments } from '../../environments/environments';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private oAuthService: OAuthService;
  private router: Router;

  constructor(
    private oauthService: OAuthService,
    private routerService: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.oAuthService = oauthService;
    this.router = routerService;
    if (isPlatformBrowser(this.platformId)) {
      this.initConfiguration();
    }
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: environments.googleClientId,
      redirectUri: environments.appUrl + '/home',
      scope: 'openid profile email',
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    const profile = this.oAuthService.getIdentityClaims();
    return profile;
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }
}
