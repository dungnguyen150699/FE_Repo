import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSkillComponent } from './stack-skill.component';

describe('StackSkillComponent', () => {
  let component: StackSkillComponent;
  let fixture: ComponentFixture<StackSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
