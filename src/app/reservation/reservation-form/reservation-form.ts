import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css'
})
export class ReservationForm implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.formbuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit() {

    if(this.reservationForm.valid) {
      console.log('valid');
    }
  }

}
