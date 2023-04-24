import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageUrl = '#'; // URL de la imagen por defecto

  updateImageUrl(url: string): void {
    this.imageUrl = url;
  }
}
