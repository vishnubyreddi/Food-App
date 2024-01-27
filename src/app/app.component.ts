import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-app';
  userName: string = 'Deepak';
  password: string = '';
  passwordAuth : string ='fghg';
  enableRouting: boolean = false;
  items: string[] = ['Apple', 'Banana', 'Orange'];

  constructor(private router: Router) { }

  login() {
    // Add your login logic here

    // If login is successful, navigate to the home page
    console.log(this.userName);
    this.enableRouting = true;
    this.router.navigate(['/home']);
  }

  openNewUserComponent() {
    this.enableRouting = true;
    this.router.navigate(['/new-user']); 
  }

  testing(){
    this.enableRouting = true;
    this.router.navigate(['/testing']);
  }
}
