import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as fr from '@angular/common/locales/fr';
import { register } from 'module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomePageComponent } from './pages/general/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SignInComponent,
    HomePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-rouges';

  constructor(){
    registerLocaleData(fr.default);
  }
}
