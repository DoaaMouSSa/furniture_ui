import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ChooseSectionService } from '../../services/chooseSection/choose-section.service';

@Component({
  selector: 'app-choose-screen',
  templateUrl: './choose-screen.component.html',
  styleUrl: './choose-screen.component.css'
})
export class ChooseScreenComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;
  constructor(private _chooseSectionService: ChooseSectionService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._chooseSectionService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
