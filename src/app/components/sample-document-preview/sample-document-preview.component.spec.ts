import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDocumentPreviewComponent } from './sample-document-preview.component';

describe('SampleDocumentPreviewComponent', () => {
  let component: SampleDocumentPreviewComponent;
  let fixture: ComponentFixture<SampleDocumentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleDocumentPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDocumentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
