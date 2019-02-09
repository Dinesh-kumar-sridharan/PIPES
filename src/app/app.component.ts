import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  public name ='dinesh kumar';
  public message = 'welcome to tutorial';
  public person = {
    "first name" : "dinesh",
    "last name" : "kumar"
  }
  public date = new Date();
}
