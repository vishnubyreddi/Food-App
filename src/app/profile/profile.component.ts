import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    address: '123 Street, City'
  };
  editing: boolean = false;

  toggleEditing() {
    this.editing = !this.editing;
  }

  saveUser() {
    // Here, you can perform the logic to save the user details
    // For example, you can make an API call to update the user information
    console.log('User details saved:', this.user);
    this.editing = false;
  }
}
