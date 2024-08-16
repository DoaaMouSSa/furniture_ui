import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../services/testimonial/testimonial.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._testimonialService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
