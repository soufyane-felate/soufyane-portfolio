import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form:FormGroup=this.fb.group({
    from_name: '',
    to_name: 'Admin',
    form_email: '',
    subject: '',
    message: '',
  });
  constructor(private fb:FormBuilder) {}

async send(){
  emailjs.init('z8bSEWkT31eq1iilJ');
 let response =await emailjs.send("service_6ybki0x","template_ab51u48",{
  from_name:this.form.value.from_name,
  to_name: this.form.value.to_name,
  form_email: this.form.value.form_email,
  subject: this.form.value.subject,
  message: this.form.value.message,
  });
  alert('message sent')
  this.form.reset();
  }


  Informations = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/5585/5585856.png',
      title: 'Phone',
      t1: '+212 622725296',
      t2: '+212 716-450436',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
      title: 'Address',
      t1: '25060 boujaad , MAR',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png',
      title: 'Email',
      t1: 'soufyanfellat03@gmail.com',
      t2: 'soufyane.felate3@gmail.com',
    },
  ];


  
}

/*
emailjs.send("service_6ybki0x","template_ab51u48",{
name: "test",
form_name: "ttt",
subject: "hhsj",
message: "jksdjd",
});
*/