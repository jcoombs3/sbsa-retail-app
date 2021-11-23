import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAngComponent } from './shared-ang.component';

describe('SharedAngComponent', () => {
  let component: SharedAngComponent;
  let fixture: ComponentFixture<SharedAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedAngComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
