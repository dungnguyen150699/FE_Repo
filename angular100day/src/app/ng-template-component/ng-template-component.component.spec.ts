import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateComponentComponent } from './ng-template-component.component';

describe('NgTemplateComponentComponent', () => {
  let component: NgTemplateComponentComponent;
  let fixture: ComponentFixture<NgTemplateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
