import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ServiceService } from '../../../services/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-index',
  templateUrl: './service-index.component.html',
  styleUrl: './service-index.component.css'
})
export class ServiceIndexComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;

  constructor(private _serviceService: ServiceService,private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._serviceService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}
goToUpdatedPage(id:String){
this._router.navigate(['/dashboard/service/update/'+id]);
}
goToDeleteData(id:any){
  this._serviceService.deleteData(id).subscribe(
    (response) => {
      this.loadData();
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}

