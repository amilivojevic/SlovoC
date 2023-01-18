import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarTitle = "Slovo Ć";

  changeTitle() {
    this.navbarTitle = this.navbarTitle=="Slovo Ć" ? "Слово Ћ" : "Slovo Ć"
  }
}
