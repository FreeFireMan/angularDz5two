import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDz5two';

  users = [];
  nameValue;
  ageValue;

  name = new FormControl();
  age = new FormControl();

  myForm = new FormGroup({
    name : this.name,
    age : this.age
  });



  action(): void{
    this.users.push({name: this.nameValue, age: this.ageValue});
    console.log(this.users);

  }
}

