import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: SignInComponent},
    {path: 'home', component: HomePageComponent},
];
