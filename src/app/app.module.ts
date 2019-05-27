/* Core Angular Modules */
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
