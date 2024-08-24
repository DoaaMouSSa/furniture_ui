import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TestimonialService } from '../../../services/testimonial/testimonial.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-testimonial-index',
  templateUrl: './testimonial-index.component.html',
  styleUrl: './testimonial-index.component.css'
})
export class TestimonialIndexComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _testimonialService: TestimonialService,private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._testimonialService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}
goToUpdatedPage(id:String){
this._router.navigate(['/dashboard/testimonial/update/'+id]);
}
goToDeleteData(id:any){
  this._testimonialService.deleteData(id).subscribe(
    (response) => {
      this.loadData();
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}
