import {Component, input, InputSignal, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.scss'
})
export class DocumentPageComponent implements OnInit {
  ngOnInit(): void {
      alert(this.content);
  }
  content: InputSignal<string> = input.required();
}
