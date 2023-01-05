
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributeLegal = 'qualquer';

  product: Product = {    
    name:  '',        
    price : null ,    
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe( () => {
        this.productService.showMessage('Produto criado com sucesso!');
        this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.productService.showMessage('operacao cancelada com sucesso!');
    this.router.navigate(['/products']);

  }
}
