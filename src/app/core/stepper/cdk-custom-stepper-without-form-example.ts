import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MovieComponent } from '../../components/movie/movie.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DeveloperComponent } from '../../components/developer/developer.component';
import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { SnackComponent } from '../../components/snack/snack.component';
import { AddressComponent } from '../../components/address/address.component';

/** @title A custom CDK stepper without a form */
@Component({
  selector: 'cdk-custom-stepper-without-form-example',
  templateUrl: './cdk-custom-stepper-without-form-example.html',
  styleUrl: './cdk-custom-stepper-without-form-example.sass',
  standalone: true,
  imports: [
    forwardRef(() => CustomStepper),
    CdkStepperModule,
    MovieComponent,
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DeveloperComponent,
    FavoriteComponent,
    SnackComponent,
    AddressComponent,
  ],
})
export class CdkCustomStepperWithoutFormExample implements OnInit {
  registrationForm!: FormGroup;

  handleFormSubmission(): void {
    console.log('Form Values:', this.registrationForm.value);
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      favoriteCategory: new FormGroup({
        Action: new FormControl(false),
        Western: new FormControl(false),
        Horror: new FormControl(false),
        Romantic: new FormControl(false),
        Drama: new FormControl(false),
        Comedy: new FormControl(false),
        Thriller: new FormControl(false),
        Kev: new FormControl(false),
        Scifi: new FormControl(false),
        Noir: new FormControl(false),
        Fantasy: new FormControl(false),
        None: new FormControl(false),
      }),
      experience: new FormGroup({
        years: new FormControl(null),
      }),
      movie: new FormGroup({
        movieName: new FormControl(''),
        releaseYear: new FormControl(''),
        alternateMovieName: new FormControl(''),
        alternateMovieYear: new FormControl(''),
      }),
      snack: new FormGroup({
        favoriteSnack: new FormControl(''),
      }),
      address: new FormGroup({
        address1: new FormControl(''),
        address2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });
  }
}

/** Custom CDK stepper component */
@Component({
  selector: 'example-custom-stepper',
  templateUrl: './example-custom-stepper.html',
  styleUrl: './example-custom-stepper.sass',
  providers: [{ provide: CdkStepper, useExisting: CustomStepper }],
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule, ButtonComponent, CommonModule],
})
export class CustomStepper extends CdkStepper {
  @Input() onSubmit!: () => void;
  ngOnInit(): void {
    this.selectedIndex = 0;
    this.linear = true;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    if (index === 5) {
      console.log('trigger');
      this.submitForm();
    }
  }

  submitForm(): void {
    if (this.onSubmit) {
      this.onSubmit();
    }
  }
}
