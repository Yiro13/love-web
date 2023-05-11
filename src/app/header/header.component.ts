import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  video(): void{
    const youtubeUrl = 'https://youtu.be/6q8jm0Lu7GU'; 
    window.open(youtubeUrl, '_blank');
  }
}
