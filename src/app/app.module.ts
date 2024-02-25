import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PortalComponent } from './portal/portal.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: " ", component: HomeComponent }, 
  { path: "complaint", component: ComplaintComponent }, 
  { path: "about", component: AboutComponent }, 
  { path: "login", component: LoginComponent }, 

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent, 
    AboutComponent,
    ComplaintComponent,
    LoginComponent,
    SignupComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
