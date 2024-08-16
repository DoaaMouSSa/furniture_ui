import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.loadData();
    console.log(this.apiUrl)
  }

  loadData(): void {
    this._productService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log('Data received:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
