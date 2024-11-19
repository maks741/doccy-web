import {Component, input, InputSignal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recent-document-preview',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './recent-document-preview.component.html',
  styleUrl: './recent-document-preview.component.scss'
})
export class RecentDocumentPreviewComponent {
  userName: InputSignal<string> = input.required();
  documentId: InputSignal<number> = input.required();
  documentName: InputSignal<string> = input.required();
  documentContent: InputSignal<string> = input.required();

  removeFromRecentDocuments(event: KeyboardEvent) {
    alert(event.target);
  }
}
