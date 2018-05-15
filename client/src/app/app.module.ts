import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 51dcf32338be8dc72bf4352ad33d489fb14a7d52
=======
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> navs

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    DashboardComponent,
    ToolInfoComponent,
    LoginComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    FooterComponent,
=======
    RegisterComponent
>>>>>>> 51dcf32338be8dc72bf4352ad33d489fb14a7d52
=======
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
>>>>>>> navs
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
