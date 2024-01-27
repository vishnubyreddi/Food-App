import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface User {
  id: number;
  userName: string;
  password: string;
  dob: Date;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  user: User = {
    id: 1,
    userName: 'JohnDoe',
    password: 'secretpassword',
    dob: new Date('1990-01-01') // Example date, adjust as needed
  };

  responseMessage: string | undefined;
  private apiUrl = 'http://localhost:8083'; // Replace with your Java backend URL

  constructor(private http: HttpClient) { }

  addUser() {
    this.http.post<string>(`${this.apiUrl}/addUser`, this.user)
      .subscribe(
        response => {
          this.responseMessage = response;
        },
        error => {
          console.error('Error adding user:', error);
          this.responseMessage = 'Error adding user';
        }
      );
  }
}