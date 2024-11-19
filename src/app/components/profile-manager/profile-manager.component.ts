import {Component, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-manager',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './profile-manager.component.html',
  styleUrl: './profile-manager.component.scss'
})
export class ProfileManagerComponent {
  popUpMenuHidden: WritableSignal<boolean> = signal(true);

  togglePopUpMenuVisibility() {
    this.popUpMenuHidden.update(previous => {
      return !previous
    });
  }
}
