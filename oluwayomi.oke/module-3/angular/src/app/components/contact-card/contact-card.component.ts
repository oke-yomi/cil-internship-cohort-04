import { Component, OnInit } from '@angular/core';
import { RestserviceService } from 'src/app/restservice.service';
import { ContactService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }
  displayedContacts: string[] = ['fullname', 'email', 'phone']

  userContact: any= [];

  getAllContacts() {
    this.service.getallContacts().subscribe(res => {
      this.userContact = res;
      // console.log(res);
    })
  }

}
