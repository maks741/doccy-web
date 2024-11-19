import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DocumentService} from '../services/document.service';
import {Document} from '../model/document.type';
import {ProfileManagerComponent} from '../components/profile-manager/profile-manager.component';
import {DocumentPageComponent} from '../components/document-page/document-page.component';
import {DocumentPage} from '../model/documentPage.type';

@Component({
  selector: 'app-edit-document',
  standalone: true,
  imports: [
    ProfileManagerComponent,
    DocumentPageComponent,
    RouterLink
  ],
  templateUrl: './edit-document.component.html',
  styleUrl: './edit-document.component.scss'
})
export class EditDocumentComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userName: string = this.route.snapshot.params["user-name"];
  documentId: number = this.route.snapshot.params["document-id"];

  documentService: DocumentService = inject(DocumentService);
  document: Document = this.documentService.getDocumentById(this.documentId);

  documentPage: DocumentPage = {content: this.document.content};

  documentPageSignal: WritableSignal<DocumentPage> = signal(this.documentPage);

}
