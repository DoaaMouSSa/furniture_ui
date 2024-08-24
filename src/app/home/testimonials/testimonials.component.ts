import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../services/testimonial/testimonial.service';
import { environment } from '../../../environments/environment';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._homeService.getTestimonials().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
