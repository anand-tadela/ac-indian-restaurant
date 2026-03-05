import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactName = '';
  contactEmail = '';
  contactSubject = '';
  contactMessage = '';
  submitted = signal(false);

  submitForm() {
    if (this.contactName && this.contactEmail && this.contactMessage) {
      this.submitted.set(true);
      // Reset form
      this.contactName = '';
      this.contactEmail = '';
      this.contactSubject = '';
      this.contactMessage = '';
      setTimeout(() => this.submitted.set(false), 5000);
    }
  }
}
