import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoService } from '../../services/info/info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  data: any;

constructor(private _messageService:MessageService,private fb:FormBuilder,private _infoService:InfoService){}
ngOnInit(): void {
  this.loadData();
  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
}

onSubmit(): void {
  if (this.contactForm.valid) {
    this._messageService.postData(this.contactForm.value)
      .subscribe(response => {
        alert('Message sent successfully!');
        this.contactForm.reset();
      }, error => {
        console.error('Error sending message', error);
      });
  }
}


  loadData(): void {
    this._infoService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}
}
