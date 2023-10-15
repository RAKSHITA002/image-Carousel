import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  images: string[] = [
    'https://cdn.pixabay.com/photo/2020/06/20/01/24/frog-5319326_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/10/22/17/45/leaf-1001679_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/05/23/05/34/drop-of-water-351778_1280.jpg',
   
  ];

  currentImageIndex = 0;

  ngOnInit(): void {
    this.showImage(this.currentImageIndex);
  }

  showImage(index: number): void {
    this.currentImageIndex = index;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
