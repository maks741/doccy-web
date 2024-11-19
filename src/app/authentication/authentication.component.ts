import {Component, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

  protected inputUsername: WritableSignal<string> = signal("");
  protected inputPassword: WritableSignal<string> = signal("");

}
