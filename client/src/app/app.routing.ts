import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ToolListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tool-info',
    component: ToolInfoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
