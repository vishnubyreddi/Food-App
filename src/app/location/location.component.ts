import { Component } from '@angular/core';

interface Location {
  name: string;
  mobileNo: string;
  pin: string;
  city: string;
  landmark: string;
  doorNo: string;
  defaultAddress: boolean;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  location: Location = {
    name: '',
    mobileNo: '',
    pin: '',
    city: '',
    landmark: '',
    doorNo: '',
    defaultAddress: false
  };
  
  saveLocation() {
    // Implement the logic to save the location details
    console.log('Location details saved:', this.location);
  }

  editLocation() {
    // Implement the logic to edit the present address
    console.log('Editing present address');
  }
}






