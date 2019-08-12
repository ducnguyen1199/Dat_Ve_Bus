import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatGheBusModule} from './dat-ghe-bus/dat-ghe-bus.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DatGheBusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
