import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-image-modal',
  templateUrl: './product-card-image-modal.page.html',
  styleUrls: ['./product-card-image-modal.page.scss'],
})
export class ProductCardImageModalPage implements OnInit {

  @Input() productImages;
  
  constructor() { }

  ngOnInit() {
  }

}
