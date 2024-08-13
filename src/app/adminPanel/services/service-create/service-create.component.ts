import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../../services/services/services.service';
@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css'
})
export class ServiceCreateComponent implements OnInit {
  createServiceFrom!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService //Inject your service
  ) { }

  ngOnInit(){
    this.createServiceFrom = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      icon: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.createServiceFrom.valid) {
      this.servicesService.addService(this.createServiceFrom.value).subscribe(response => {
        console.log('Form submitted successfully', response);
        // Handle success
      }, error => {
        console.error('Error submitting form', error);
        // Handle error
      });
    }
  }

}
