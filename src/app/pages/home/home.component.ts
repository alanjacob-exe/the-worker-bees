import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  sendToast() {
    console.log('hello');
  }
}
