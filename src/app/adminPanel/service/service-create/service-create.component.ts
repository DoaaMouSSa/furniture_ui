import { ServiceService } from '../../../services/service/service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css'
})
export class ServiceCreateComponent {
  service = { title: '', subTitle: '', paragraph: '' };
  selectedImage: File | null = null;

  constructor(private _serviceService:ServiceService,private _router:Router) {}

  onFileChange(event: any) {
    this.selectedImage = event.target.files[0] as File;
  }

  onSubmit() {
    if (!this.selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('title', this.service.title);
    formData.append('subTitle', this.service.subTitle);
    formData.append('paragraph', this.service.paragraph);
    formData.append('image', this.selectedImage, this.selectedImage.name);
      this._serviceService.postData(formData).subscribe(
        response => {
          console.log(response)
          this._router.navigate(['/dashboard/service/index']);
        },
        error => {
          console.error('Server error:', error);
          console.log(error)
        }
      );

  }
}
