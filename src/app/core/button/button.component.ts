import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass',
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = '';
  @Input() styleClass: string = 'generic-button-styles';
  @Input() isDisabled: boolean = false;
  @Input() navigateTo: string | null = null;
  @Output() onClick = new EventEmitter<MouseEvent>();
  @Output() onMouseOver = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {}

  handleMouseClick(event: MouseEvent) {
    if (!this.isDisabled) {
      this.onClick.emit(event);
    }
    if (this.navigateTo) {
      this.router.navigate([this.navigateTo]);
    }
  }
  handleMouseOver(event: MouseEvent) {
    if (!this.isDisabled) {
      this.onMouseOver.emit(event);
    }
  }
}
