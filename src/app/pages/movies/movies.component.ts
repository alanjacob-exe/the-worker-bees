import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieComponent } from '../../components/movie/movie.component';
import {
  CdkCustomStepper,
  CustomStepper,
} from '../../core/stepper/cdk-custom-stepper-without-form-example';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CustomStepper, CommonModule, CdkCustomStepper, MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.sass',
})
export class MoviesComponent {}
