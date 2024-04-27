import { ApplicationConfig, LOCALE_ID, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { OAuthModule, provideOAuthClient } from 'angular-oauth2-oidc';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    
    OAuthModule.forRoot()
  ],
 
})
export class AppModule { }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    {provide: LOCALE_ID, useValue: 'fr-FR'}, provideAnimationsAsync(),
    provideHttpClient(),
    provideOAuthClient(),
    provideAnimationsAsync(),
  ]
  
};
