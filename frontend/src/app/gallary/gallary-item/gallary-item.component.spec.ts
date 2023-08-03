import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryItemComponent } from './gallary-item.component';

describe('GallaryItemComponent', () => {
  let component: GallaryItemComponent;
  let fixture: ComponentFixture<GallaryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallaryItemComponent]
    });
    fixture = TestBed.createComponent(GallaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
