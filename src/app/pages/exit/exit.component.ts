import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-exit',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.sass',
})
export class ExitComponent {}
