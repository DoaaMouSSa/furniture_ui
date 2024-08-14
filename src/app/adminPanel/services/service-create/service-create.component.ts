import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services/services.service';
@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css'
})
export class ServiceCreateComponent{
  service = {
    name: '',
    description: '',
    icon: ''
  };

  constructor(private _serviceService:ServicesService) {}
  onSubmit() {
    this._serviceService.addService(this.service)
    .subscribe(response => {
      console.log('Service added:', response);
      // Optionally, you can clear the form or show a success message
      this.service = { name: '', description: '',icon:'' };
    }, error => {
      console.error('Error adding service:', error);
    });
  }
}
