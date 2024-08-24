import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._homeService.getServices().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
