import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-skill',
  templateUrl: './stack-skill.component.html',
  styleUrls: ['./stack-skill.component.css']
})
export class StackSkillComponent {
  @Input() progress = 50;
  name = 'Angular';

  public upgradeProgress(){
    this.progress++;
  }

  public downgradeProgress(){
    this.progress--;
  }
}
