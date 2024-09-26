import { Component, forwardRef, OnInit } from '@angular/core';
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
import { AddressComponent } from "../../components/address/address.component";

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
    AddressComponent
],
})
export class CdkCustomStepperWithoutFormExample implements OnInit {
  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      favoriteCategory: new FormGroup({
        Action: new FormControl(null),
        Western: new FormControl(false),
        Horror: new FormControl(null),
        Romantic: new FormControl(null),
        Drama: new FormControl(null),
        Comedy: new FormControl(null),
        Thriller: new FormControl(null),
        Kev: new FormControl(null),
        Scifi: new FormControl(null),
        Noir: new FormControl(null),
        Fantasy: new FormControl(null),
        None: new FormControl(null),
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
  ngOnInit(): void {
    this.selectedIndex = 0; // Set the first step as active
    this.linear = true;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
