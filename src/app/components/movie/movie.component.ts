import { Component, Input, input, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    TextFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass',
})
export class MovieComponent implements OnInit {
  @Input() form!: FormGroup;

  ngOnInit(): void {}

  genres: { value: string; label: string; key: string }[] = [
    { value: 'Action', label: 'Action', key: 'Action' },
    { value: 'Western', label: 'Western', key: 'Western' },
    { value: 'Horror', label: 'Horror', key: 'Horror' },
    { value: 'Romantic', label: 'Romantic', key: 'Romantic' },
    { value: 'Drama', label: 'Drama', key: 'Drama' },
    { value: 'Comedy', label: 'Comedy', key: 'Comedy' },
    { value: 'Thriller', label: 'Thriller', key: 'Thriller' },
    {
      value: 'Kevin Hart Buddy Comedy',
      label: 'Kevin Hart Buddy Comedy',
      key: 'Kev',
    },
    {
      value: 'Science Fiction',
      label: 'Science Fiction',
      key: 'Scifi',
    },
    { value: 'Noir', label: 'Noir', key: 'Noir' },
    { value: 'Fantasy', label: 'Fantasy', key: 'Fantasy' },
    {
      value: 'None of the above',
      label: 'None of the above',
      key: 'None',
    },
  ];
}
