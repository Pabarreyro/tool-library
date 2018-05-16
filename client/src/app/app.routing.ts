import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { MembershipComponent } from './membership/membership.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { GrouploansComponent } from './grouploans/grouploans.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ToolInfoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'grouploans',
    component: GrouploansComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
