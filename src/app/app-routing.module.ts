import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import {PortalComponent } from './portal/portal.component';
const routes: Routes = [
  {path: '', redirectTo: 'Sustainable-City' , pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'complaint', component: ComplaintComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'app', component: AppComponent},
  {path: 'portal', component: PortalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
