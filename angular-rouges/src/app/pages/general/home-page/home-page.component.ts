import { Component, OnInit, inject } from '@angular/core';
import { AuthGoogleService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  profile: any;

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.profile = this.authService.getProfile();
    console.log(this.profile);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  


}
