import {Component, inject, signal, WritableSignal} from '@angular/core';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';
import {DocumentService} from '../services/document.service';
import {DocumentPreview} from '../model/documentpreview.type';
import {SampleDocumentPreviewComponent} from '../components/sample-document-preview/sample-document-preview.component';
import {RecentDocumentPreviewComponent} from '../components/recent-document-preview/recent-document-preview.component';
import {ProfileManagerComponent} from '../components/profile-manager/profile-manager.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    SampleDocumentPreviewComponent,
    RecentDocumentPreviewComponent,
    ProfileManagerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected username: string = this.route.snapshot.params["user-name"];
  private documentService: DocumentService = inject(DocumentService);

  protected recentDocuments: WritableSignal<DocumentPreview[]> = signal(this.documentService.getRecentDocuments());
  protected documentSamples: WritableSignal<DocumentPreview[]> = signal(this.documentService.getSampleDocuments());
}
