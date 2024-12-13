import { Component, Input, OnInit } from '@angular/core';
import { Skill, skills } from '../shared/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  private skill!: Skill;

  @Input() header!: string;

  ngOnInit(): void {
    console.log(this.header);    
    // this.skill = skills.filter(s => s.header === "Programming languages")[0];
    this.skill = skills.filter(s => s.header === this.header)![0];
    console.log(this.skill);    
  }

  public Header(): string {
    return this.skill?.header;
  }

  public IconFullFileNames(): string[] {
    return this.skill?.icons.map(x => `assets/skills/${x.svg}`);
  }
}
