import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDocumentPreviewComponent } from './recent-document-preview.component';

describe('RecentDocumentPreviewComponent', () => {
  let component: RecentDocumentPreviewComponent;
  let fixture: ComponentFixture<RecentDocumentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentDocumentPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentDocumentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
