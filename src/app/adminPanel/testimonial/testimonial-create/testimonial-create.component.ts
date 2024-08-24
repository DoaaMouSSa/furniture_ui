import { Component } from '@angular/core';
import { TestimonialService } from '../../../services/testimonial/testimonial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonial-create',
  templateUrl: './testimonial-create.component.html',
  styleUrl: './testimonial-create.component.css'
})
export class TestimonialCreateComponent {
    testimonial = { name: '', comment: '', position: '' };
    selectedImage: File | null = null;

    constructor(private _testimonialService:TestimonialService,private _router:Router) {}

    onFileChange(event: any) {
      this.selectedImage = event.target.files[0] as File;
    }

    onSubmit() {
      if (!this.selectedImage) {
        return;
      }

      const formData = new FormData();
      formData.append('name', this.testimonial.name);
      formData.append('comment', this.testimonial.comment);
      formData.append('position', this.testimonial.position);
      formData.append('image', this.selectedImage, this.selectedImage.name);
        this._testimonialService.postData(formData).subscribe(
          response => {
            console.log(response)
            this._router.navigate(['/dashboard/testimonial/index']);
          },
          error => {
            console.error('Server error:', error);
            console.log(error)
          }
        );

    }
  }

