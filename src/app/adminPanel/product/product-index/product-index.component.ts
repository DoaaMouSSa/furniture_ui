import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.css'
})
export class ProductIndexComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _productService: ProductService,private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._productService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}
goToUpdatedPage(id:String){
this._router.navigate(['/dashboard/product/update/'+id]);
}
goToDeleteData(id:any){
  this._productService.deleteData(id).subscribe(
    (response) => {
      this.loadData();
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}
