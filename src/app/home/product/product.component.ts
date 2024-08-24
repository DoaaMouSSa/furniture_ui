import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._homeService.getProducts().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
