import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
