import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HelpSectionService } from '../../services/helpSection/help-section.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  data: any;
  apiUrl=`${environment.apiUrl}`;
  constructor(private _helpSectionService: HelpSectionService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._helpSectionService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
