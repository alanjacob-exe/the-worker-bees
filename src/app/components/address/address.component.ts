import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.sass',
})
export class AddressComponent {
  @Input() form!: FormGroup;

  addressFields: { label: string; controlName: string; placeHolder: string }[] =
    [
      { label: 'Address 1', placeHolder: 'Address 1', controlName: 'address1' },
      { label: 'Address 2', placeHolder: 'Address 2', controlName: 'address2' },
    ];

  locationFields: {
    label: string;
    controlName: string;
    placeHolder: string;
  }[] = [
    { label: 'State', placeHolder: 'State', controlName: 'state' },
    { label: 'Zip Code', placeHolder: 'Zip Code', controlName: 'zip' },
  ];
}
