import { Component } from '@angular/core';
import { cyrilicAlphabet, latinAlphabet } from '../alphabet';
import { cyrilicWords, latinWords } from '../words';

@Component({
  selector: 'app-match-letter',
  templateUrl: './match-letter.component.html',
  styleUrls: ['./match-letter.component.scss']
})
export class MatchLetterComponent {
  title = 'slovoc';
  cyrilicAlphabet = cyrilicAlphabet;
  latinAlphabet = latinAlphabet;
  cyrilicWords = cyrilicWords;
  latinWords = latinWords;
  selectedCyrilicIndex: number = -1;
  selectedLatinIndex: number = -1;

  selectCyrilic(index: number) {
    if (this.selectedCyrilicIndex == index) {
      this.selectedCyrilicIndex = -1;
    } else {
      this.selectedCyrilicIndex = index;
    }
  }

  selectLatin(index: number) {
    if (this.selectedLatinIndex == index) {
      this.selectedLatinIndex = -1;
    } else {
      this.selectedLatinIndex = index;
    }
  }
}
