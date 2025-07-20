import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
      t2: '23000 Beni mellal , MAR',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png',
      title: 'Email',
      t1: 'soufyanfellat03@gmail.com',
      t2: 'soufyanfellat0@gmail.com',
    },
  ];

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  validate: string = '';
  isValid: boolean = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.validateInput();
  }

  validateInput() {
    if (!this.name || !this.email || !this.message) {
      this.validate = 'All fields are required';
      this.isValid = false;
    } else if (!this.validateEmail(this.email)) {
      this.validate = 'Please enter a valid email address';
      this.isValid = false;
    } else {
      this.validate = 'Message sent successfully!';
      this.isValid = true;
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
}
