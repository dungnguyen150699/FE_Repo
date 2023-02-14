import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelComponentComponent } from './ng-model-component.component';

describe('NgModelComponentComponent', () => {
  let component: NgModelComponentComponent;
  let fixture: ComponentFixture<NgModelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
