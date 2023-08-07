import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proveway-webpage';
  first: boolean = false;
  second: boolean = false;
  third: boolean = false;
  change(id: any) {
    if (id == "first") {
      this.first = true;
      this.second = false;
      this.third = false;
    }
    else if (id == "second") {
      this.first = false;
      this.second = true;
      this.third = false;
    }
    else if (id == "third") {
      this.first = false;
      this.second = false;
      this.third = true;
    }
  }
}
