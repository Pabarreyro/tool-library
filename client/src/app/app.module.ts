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
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { MembershipComponent } from './membership/membership.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { GrouploansComponent } from './grouploans/grouploans.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    DashboardComponent,
    ToolInfoComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    MembershipComponent,
    VolunteerComponent,
    GrouploansComponent,
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
