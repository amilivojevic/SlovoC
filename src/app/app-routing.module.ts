import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchLetterDefaultComponent } from './match-letter-default/match-letter-default.component';
import { MatchLetterComponent } from './match-letter/match-letter.component';


const routes: Routes = [
  { path: '', component: MatchLetterDefaultComponent },
  { path: 'match-letter', component: MatchLetterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
