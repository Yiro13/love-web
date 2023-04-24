import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  @ViewChild('no', { static: true }) buttonRef!: ElementRef;
  
  constructor(private renderer: Renderer2) {}

  move_button(): void {
    const container = this.containerRef.nativeElement;
    const button = this.buttonRef.nativeElement;
    const containerWidth = container.offsetWidth - button.offsetWidth;
    const containerHeight = container.offsetHeight - button.offsetHeight;
    const nuevaPosicionLeft = Math.floor(Math.random() * containerWidth);
    const nuevaPosicionTop = Math.floor(Math.random() * containerHeight);
    this.renderer.setStyle(button, 'left', nuevaPosicionLeft + 'px');
    this.renderer.setStyle(button, 'top', nuevaPosicionTop + 'px');
  }

}
