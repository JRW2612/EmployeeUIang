import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    AppComponent,
    DropdownComponent,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]), 
    HttpClientModule// Set up routes if needed
    
  ],
    
    providers: [provideHttpClient(withFetch())]
})
export class AppModule { }
