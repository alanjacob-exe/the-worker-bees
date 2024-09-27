import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [
    DeveloperComponent,
    MatRadioModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.sass',
})
export class DeveloperComponent implements OnInit {
  @Input() form!: FormGroup;

  ngOnInit(): void {}

  radioValues: { label: string; value: string }[] = [
    { value: '0-3 years', label: '0-3 years' },
    { value: '4-6 years', label: '4-6 years' },
    { value: '7 or more years', label: '7 or more years' },
  ];
}
