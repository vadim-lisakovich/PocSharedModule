import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureComponent } from './shared-feature.component';

describe('SharedFeatureComponent', () => {
  let component: SharedFeatureComponent;
  let fixture: ComponentFixture<SharedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
