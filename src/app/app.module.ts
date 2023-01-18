import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchLetterComponent } from './match-letter/match-letter.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchLetterDefaultComponent } from './match-letter-default/match-letter-default.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchLetterComponent,
    MatchLetterDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
