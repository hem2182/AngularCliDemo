import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstNgCliApp';
  // method say hello
  sayHello() {
    let message = 'hello';
    message = message + 'Hemant';
    console.log(message);
  }
}
