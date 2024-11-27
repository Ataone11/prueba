import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../data-access/user-state.service';
import { ProductCardComponent } from '../../../shared/ui/product-card/product-card.component';
import { User } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers:[ProductsStateService]
})
export default class ProductListComponent {
productsState = inject(ProductsStateService)

}
