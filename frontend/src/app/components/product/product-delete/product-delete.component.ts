import { Component } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.productService.delete(String(id)).subscribe((produto) => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    });


  }

}
