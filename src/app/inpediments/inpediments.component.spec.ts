import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpedimentsComponent } from './inpediments.component';

describe('InpedimentsComponent', () => {
  let component: InpedimentsComponent;
  let fixture: ComponentFixture<InpedimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpedimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpedimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
