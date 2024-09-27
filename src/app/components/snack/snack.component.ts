import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [MatRadioModule, CommonModule, ReactiveFormsModule],
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.sass',
})
export class SnackComponent {
  @Input() form!: FormGroup;

  snacks: { value: string; label: string }[] = [
    { value: 'Popcorn', label: 'Popcorn' },
    { value: 'Nachos', label: 'Nachos' },
    { value: 'Junior Mints', label: 'Junior Mints' },
    { value: 'Milk Duds', label: 'Milk Duds' },
    { value: 'Skittles', label: 'Skittles' },
    {
      value: 'Arthouses',
      label:
        'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.',
    },
  ];
}
