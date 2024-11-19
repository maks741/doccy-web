import {Component, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sample-document-preview',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sample-document-preview.component.html',
  styleUrl: './sample-document-preview.component.scss'
})
export class SampleDocumentPreviewComponent {
  userName: InputSignal<string> = input.required();
  documentId: InputSignal<number> = input.required();
  documentName: InputSignal<string> = input.required();
  documentContent: InputSignal<string> = input.required();
}
