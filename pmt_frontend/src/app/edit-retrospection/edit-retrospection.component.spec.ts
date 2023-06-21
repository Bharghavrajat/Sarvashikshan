import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRetrospectionComponent } from './edit-retrospection.component';

describe('EditRetrospectionComponent', () => {
  let component: EditRetrospectionComponent;
  let fixture: ComponentFixture<EditRetrospectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRetrospectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRetrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
