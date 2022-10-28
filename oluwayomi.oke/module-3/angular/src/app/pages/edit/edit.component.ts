import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contact = {
    fullname: "", 
    email: "",
    phone:""
  };  
  editId: any;

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => { 

      const id = params.get('id'); 
      console.log(id);


      this.contactService.getContactById(id).subscribe(res => {
      
        console.log(res); 
        this.contact.email = res.email; 
        this.contact.fullname = res.fullname; 
        this.contact.phone = res.phone;
  
      }, 
        (err) => {
          console.log("Error occurred while retreiving contact by Id ", err);
  
         } 
      
      )
    
    });
    

    //this.contact = this.service.getallContacts.sub(x => x.id == this.editId)
  }

  updateSubmit(contact: { fullname: string, email: string, phone: string }) {
    // console.log(contact)

    

    this.router.navigate(['/']);
  }

}
