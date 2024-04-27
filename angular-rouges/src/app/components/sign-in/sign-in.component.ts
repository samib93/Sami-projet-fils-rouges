import { Component, inject } from '@angular/core';
import {environments } from '../../../environments/environments';
import { AuthGoogleService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  private authService = inject(AuthGoogleService);
  
  signInWithGoogle() {
    this.authService.login();
  }
}
