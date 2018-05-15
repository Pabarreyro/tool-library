import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    DashboardComponent,
    ToolInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
