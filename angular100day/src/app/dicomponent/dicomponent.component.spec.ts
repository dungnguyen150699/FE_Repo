import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIComponentComponent } from './dicomponent.component';

describe('DIComponentComponent', () => {
  let component: DIComponentComponent;
  let fixture: ComponentFixture<DIComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
