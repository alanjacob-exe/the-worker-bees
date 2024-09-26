import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [DeveloperComponent, MatRadioModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.sass',
})
export class DeveloperComponent {}
