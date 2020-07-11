import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCardImageModalPageRoutingModule } from './product-card-image-modal-routing.module';

import { ProductCardImageModalPage } from './product-card-image-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCardImageModalPageRoutingModule
  ],
  declarations: [ProductCardImageModalPage]
})
export class ProductCardImageModalPageModule {}
