import { TestimonialService } from './../../services/testimonial/testimonial.service';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testimonial-screen',
  templateUrl: './testimonial-screen.component.html',
  styleUrl: './testimonial-screen.component.css'
})
export class TestimonialScreenComponent {
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
