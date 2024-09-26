import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkCustomStepperWithoutFormExample,
  CustomStepper,
} from '../../core/stepper/cdk-custom-stepper-without-form-example';
import { MovieComponent } from '../../components/movie/movie.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CustomStepper,
    CommonModule,
    CdkCustomStepperWithoutFormExample,
    MovieComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.sass',
})
export class MoviesComponent {}
