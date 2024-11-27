import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<User>();

  

 
}
