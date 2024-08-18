import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.css'
})
export class ProductIndexComponent {
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
