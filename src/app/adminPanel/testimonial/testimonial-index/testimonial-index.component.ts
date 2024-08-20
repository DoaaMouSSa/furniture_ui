import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TestimonialService } from '../../../services/testimonial/testimonial.service';

@Component({
  selector: 'app-testimonial-index',
  templateUrl: './testimonial-index.component.html',
  styleUrl: './testimonial-index.component.css'
})
export class TestimonialIndexComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _testimonialService:TestimonialService) { }

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
