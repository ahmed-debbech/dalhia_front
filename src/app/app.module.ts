import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // directive: ngModel
    HttpClientModule // service : HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
