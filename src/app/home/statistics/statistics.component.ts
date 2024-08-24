import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{
  data: any;
  constructor(private _statisticsService:StatisticsService) { }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._statisticsService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
