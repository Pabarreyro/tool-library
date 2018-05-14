import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';

const appRoutes: Routes = [
  {
  path: '',
  component: ToolListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
