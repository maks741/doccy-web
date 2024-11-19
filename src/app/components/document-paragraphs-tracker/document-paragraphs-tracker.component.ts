import {Component, input, InputSignal, OnInit} from '@angular/core';
import {DocumentPage} from '../../model/documentPage.type';

@Component({
  selector: 'app-document-paragraphs-tracker',
  standalone: true,
  imports: [],
  templateUrl: './document-paragraphs-tracker.component.html',
  styleUrl: './document-paragraphs-tracker.component.scss'
})
export class DocumentParagraphsTrackerComponent implements OnInit {
  documentPages: InputSignal<DocumentPage[]> = input.required();

  ngOnInit(): void {
    for (let i:number = 0; i < this.documentPages().length; i++) {
      const documentPage: DocumentPage = this.documentPages()[i];
      const content: string = documentPage.content;
    }
  }
}
