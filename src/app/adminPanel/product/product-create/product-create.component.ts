import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product = { name: '', desc: '', price: 0 };
  selectedImage: File | null = null;

  constructor(private _productService:ProductService,private _router:Router) {}

  onFileChange(event: any) {
    this.selectedImage = event.target.files[0] as File;
  }

  onSubmit() {
    if (!this.selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('desc', this.product.desc);
    formData.append('price', this.product.price.toString());
    formData.append('image', this.selectedImage, this.selectedImage.name);
      this._productService.postData(formData).subscribe(
        response => {
          console.log(response)
          this._router.navigate(['/dashboard/product/index']);
        },
        error => {
          console.error('Server error:', error);
          console.log(error)
        }
      );

  }
}
