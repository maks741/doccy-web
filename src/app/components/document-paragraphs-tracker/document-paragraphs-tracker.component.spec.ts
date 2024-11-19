import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentParagraphsTrackerComponent } from './document-paragraphs-tracker.component';

describe('DocumentParagraphsTrackerComponent', () => {
  let component: DocumentParagraphsTrackerComponent;
  let fixture: ComponentFixture<DocumentParagraphsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentParagraphsTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentParagraphsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
