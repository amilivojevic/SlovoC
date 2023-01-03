import { Component } from '@angular/core';
import { cyrilicAlphabet, latinAlphabet } from './alphabet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slovoc';
  cyrilicAlphabet = cyrilicAlphabet;
  latinAlphabet = latinAlphabet;
}
