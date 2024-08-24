import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

   productId!:any;
  productForm!: FormGroup;

  constructor(private fb: FormBuilder,private _productService:ProductService,private _router:ActivatedRoute,private router:Router) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: [''],
      price: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.productId = this._router.snapshot.paramMap.get('id');

    if (this.productId) {
      this.fillForm();
    }
  }


fillForm(){
  this._productService.GetById(this.productId as string).subscribe(product => {
    this.productForm.patchValue({
      name: product.name,
      desc: product.desc,
      price: product.price
    });
  });
}

onSubmit() {
  if (this.productForm.valid) {
    this._productService.updateData(this.productId, this.productForm.value).subscribe(
      response => {
        console.log('Product updated successfully:', response);
        this.router.navigate(['/dashboard/product/index']);

      },
      error => {
        console.error('Error updating product:', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }}
}
