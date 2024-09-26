import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [MatInputModule, ButtonComponent,CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.sass',
})
export class FavoriteComponent {
  showAdditionalFields: boolean = false;

  toggleAdditionalFields(): void {
    this.showAdditionalFields = !this.showAdditionalFields;
  }
}
