import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCardImageModalPage } from './product-card-image-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCardImageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardImageModalPageRoutingModule {}
