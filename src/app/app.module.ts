import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { TuiButtonModule, TuiGroupModule, TuiRootModule } from '@taiga-ui/core';
import { TuiRadioBlockModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiRootModule,
    TuiRadioBlockModule,
    TuiGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
