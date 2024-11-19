import { Pipe, PipeTransform } from '@angular/core';
import {DocumentPreview} from '../model/documentpreview.type';

@Pipe({
  name: 'filterRecentDocuments',
  standalone: true
})
export class FilterRecentDocumentsPipe implements PipeTransform {

  transform(recentDocuments: DocumentPreview[], input: string): DocumentPreview[] {
    if(!input) return [];

    return recentDocuments.filter((recentDocument) => {
      return recentDocument.name.includes(input);
    });
  }

}
