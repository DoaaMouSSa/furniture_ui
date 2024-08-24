import { TestimonialService } from './../../../services/testimonial/testimonial.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-testimonial-update',
  templateUrl: './testimonial-update.component.html',
  styleUrl: './testimonial-update.component.css'
})
export class TestimonialUpdateComponent implements OnInit {

  testimonialId!:any;
  testimonialForm!: FormGroup;

  constructor(private fb: FormBuilder,private _testimonialService:TestimonialService,private _router:ActivatedRoute,private router:Router) {
    this.testimonialForm = this.fb.group({
      name: ['', [Validators.required]],
      comment: [''],
      position: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.testimonialId = this._router.snapshot.paramMap.get('id');

    if (this.testimonialId) {
      this.fillForm();
    }
  }


fillForm(){
  this._testimonialService.GetById(this.testimonialId as string).subscribe(testimonial => {
    this.testimonialForm.patchValue({
      name: testimonial.name,
      comment: testimonial.comment,
      position: testimonial.position
    });
  });
}

onSubmit() {
  if (this.testimonialForm.valid) {
    this._testimonialService.updateData(this.testimonialId, this.testimonialForm.value).subscribe(
      response => {
        console.log('testimonial updated successfully:', response);
        this.router.navigate(['/dashboard/testimonial/index']);

      },
      error => {
        console.error('Error updating testimonial:', error);
      }
    );
  } else {
    console.log('Form is invalid');
  }}
}
