import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackageComponent } from './package/package.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: "", 
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home", 
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about/:id",
    component: AboutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "addPackage",
    component: PackageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }