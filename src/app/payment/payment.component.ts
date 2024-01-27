import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  makeUPIPayment() {
    // Implement the logic to initiate UPI payment
    console.log('Initiating UPI payment');
  }

  generateQRCode() {
    // Implement the logic to generate QR code
    console.log('Generating QR code');
  }
}
