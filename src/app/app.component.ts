import { Component } from '@angular/core';
import { skills } from './shared/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RswApp';

  public SkillHeaders(): string[] {
    return skills.map(x => x.header);
  } 
}
