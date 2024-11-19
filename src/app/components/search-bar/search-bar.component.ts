import {Component, inject, signal, WritableSignal} from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {DocumentPreview} from '../../model/documentpreview.type';
import {FormsModule} from '@angular/forms';
import {FilterRecentDocumentsPipe} from '../../pipes/filter-recent-documents.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    FilterRecentDocumentsPipe
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  documentService: DocumentService = inject(DocumentService);
  recentDocuments: DocumentPreview[] = this.documentService.getRecentDocuments();

  searchInput: WritableSignal<string> = signal("");

  router: Router = inject(Router);

  navigateToEditDocument(documentId: number) {
    this.router.navigate([this.router.url + `/documents/${documentId}`]);
  }
}
