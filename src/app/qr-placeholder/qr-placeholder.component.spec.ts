import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPlaceholderComponent } from './qr-placeholder.component';

describe('QrPlaceholderComponent', () => {
  let component: QrPlaceholderComponent;
  let fixture: ComponentFixture<QrPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
