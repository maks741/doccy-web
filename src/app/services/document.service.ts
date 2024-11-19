import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DocumentPreview} from '../model/documentpreview.type';
import {Document} from '../model/document.type';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  httpClient: HttpClient = inject(HttpClient);

  getDocumentById(id: number): Document {
    let documentPreview: DocumentPreview | undefined = this.getRecentDocuments().find((documentPreview) => {
      return documentPreview.id == id;
    });

    if(!documentPreview) {
      documentPreview = this.getSampleDocuments().find((documentPreview) => {
        return documentPreview.id == id;
      });
    }

    if(!documentPreview) {
      return {
        id: 0,
        name: "",
        content: ""
      }
    }

    return {
      ...documentPreview
    };
  }

  getRecentDocuments(): DocumentPreview[] {
    return [
      {
        id: 0,
        name: "Recent1",
        content: "sample document content"
      },
      {
        id: 1,
        name: "Recent2",
        content: "sample document content"
      },
      {
        id: 2,
        name: "Recent3",
        content: "sample document content"
      },
      {
        id: 4,
        name: "Recent1",
        content: "sample document content"
      },
      {
        id: 5,
        name: "Recent2",
        content: "sample document content"
      },
      {
        id: 6,
        name: "Recent3",
        content: "sample document content"
      },
      {
        id: 7,
        name: "Recent1",
        content: "sample document content"
      },
      {
        id: 8,
        name: "Recent2",
        content: "sample document content"
      }
    ];
  }

  getSampleDocuments(): DocumentPreview[] {
    return [
      {
        id: 9,
        name: "New document",
        content: ""
      },
      {
        id: 10,
        name: "Resume",
        content: "My name is Maxim, I am 18 years old. Here is example resume"
      },
      {
        id: 11,
        name: "Report",
        content: "A report on topic UX/UI. UX/UI - important part of development of every project"
      },
      {
        id: 12,
        name: "Letter",
        content: "A letter to my dear friend"
      },
      {
        id: 13,
        name: "Sample2",
        content: "sample document content"
      },
      {
        id: 14,
        name: "Sample3",
        content: "sample document content"
      }
    ];
  }
}
