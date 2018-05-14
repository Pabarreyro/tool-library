import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
  path: '',
  component: ToolListComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
