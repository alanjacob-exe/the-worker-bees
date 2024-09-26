import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [MatRadioModule, CommonModule],
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.sass',
})
export class SnackComponent {
  snacks = [
    { value: '1', label: 'Popcorn' },
    { value: '2', label: 'Nachos' },
    { value: '3', label: 'Junior Mints' },
    { value: '4', label: 'Milk Duds' },
    { value: '5', label: 'Skittles' },
    {
      value: '6',
      label:
        'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.',
    },
  ];
}
