import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 51dcf32338be8dc72bf4352ad33d489fb14a7d52

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    DashboardComponent,
    ToolInfoComponent,
    LoginComponent,
<<<<<<< HEAD
    FooterComponent,
=======
    RegisterComponent
>>>>>>> 51dcf32338be8dc72bf4352ad33d489fb14a7d52
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
