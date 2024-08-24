import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.css'
})
export class ProductScreenComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._productService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
