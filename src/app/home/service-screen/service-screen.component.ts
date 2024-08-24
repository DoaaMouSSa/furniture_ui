import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrl: './service-screen.component.css'
})
export class ServiceScreenComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _serviceService: ServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._serviceService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
