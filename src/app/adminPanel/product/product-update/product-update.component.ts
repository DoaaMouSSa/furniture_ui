import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{
  productId:String| null = null;
  productForm!: FormGroup;
  selectedImage: File | null = null;
  constructor(private fb: FormBuilder,private _productService:ProductService,private _router:ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: [''],
      price: ['', [Validators.required]],
      image: ['']
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
onFileChange(event: any) {
  this.selectedImage = event.target.files[0] as File;
}
onSubmit() {
}
}
