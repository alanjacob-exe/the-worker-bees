import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../core/button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [MatInputModule, ButtonComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.sass',
})
export class FavoriteComponent {
  @Input() form!: FormGroup;

  showAdditionalFields: boolean = false;

  toggleAdditionalFields(): void {
    this.showAdditionalFields = !this.showAdditionalFields;
  }

  movieFields: { label: string; controlName: string; placeHolder: string }[] = [
    { label: 'Title', controlName: 'movieName', placeHolder: 'RoboCop' },
    {
      label: 'Year of Release',
      controlName: 'releaseYear',
      placeHolder: '1987 not 2014, you monster',
    },
  ];

  alternateFields: {
    label: string;
    controlName: string;
    placeHolder: string;
  }[] = [
    {
      label: 'Title',
      controlName: 'alternateMovieName',
      placeHolder: 'RoboCop',
    },
    {
      label: 'Year of Release',
      controlName: 'alternateMovieYear',
      placeHolder: '1987 not 2014, you monster',
    },
  ];
}
