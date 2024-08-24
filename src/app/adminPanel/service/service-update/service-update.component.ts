import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { ServiceService } from '../../../services/service/service.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrl: './service-update.component.css'
})
export class ServiceUpdateComponent implements OnInit{

  serviceId!:any;
  serviceForm!: FormGroup;

  constructor(private fb: FormBuilder,private _serviceService:ServiceService,private _router:ActivatedRoute,private router:Router) {
    this.serviceForm = this.fb.group({
      title: ['', [Validators.required]],
      subTitle: [''],
      paragraph: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.serviceId = this._router.snapshot.paramMap.get('id');

    if (this.serviceId) {
      this.fillForm();
    }
  }


fillForm(){
  this._serviceService.GetById(this.serviceId as string).subscribe(service => {
    this.serviceForm.patchValue({
      title: service.title,
      subTitle: service.subTitle,
      paragraph: service.paragraph
    });
  });
}

onSubmit() {
  if (this.serviceForm.valid) {
    this._serviceService.updateData(this.serviceId, this.serviceForm.value).subscribe(
      response => {
        console.log('service updated successfully:', response);
        this.router.navigate(['/dashboard/service/index']);

      },
      error => {
        console.error('Error updating service:', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }}
}
