import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRetrospectionComponent } from './open-retrospection.component';

describe('OpenRetrospectionComponent', () => {
  let component: OpenRetrospectionComponent;
  let fixture: ComponentFixture<OpenRetrospectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenRetrospectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenRetrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
