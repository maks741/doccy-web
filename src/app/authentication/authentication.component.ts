import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  onSubmit(form: NgForm) {
    const { inputUsername } = form.value;

    if(!inputUsername) {
      return;
    }

    window.location.href = `/${inputUsername}`;
  }
}
