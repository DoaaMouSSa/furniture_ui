import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../services/message/message.service';

@Component({
  selector: 'app-message-index',
  templateUrl: './message-index.component.html',
  styleUrl: './message-index.component.css'
})
export class MessageIndexComponent {
  data: any;

  constructor(private _messgeService: MessageService,private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._messgeService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
}

goToDeleteData(id:any){
  this._messgeService.deleteData(id).subscribe(
    (response) => {
      this.loadData();
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}

