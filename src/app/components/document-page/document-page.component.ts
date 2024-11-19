import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent {
  content: InputSignal<string> = input.required();
}
