import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent {
  skills = [
    {
      icon: 'fas fa-lightbulb',
      title: 'SKILLS.PROBLEM_SOLVING',
    },
    {
      icon: 'fas fa-tasks',
      title: 'SKILLS.ORGANIZATION',
    },
    {
      icon: 'fas fa-user-check',
      title: 'SKILLS.AUTONOMY',
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'SKILLS.ADAPTABILITY',
    },
    {
      icon: 'fas fa-users',
      title: 'SKILLS.TEAMWORK',
    },
    {
      icon: 'fas fa-bolt',
      title: 'SKILLS.MOTIVATION',
    },
    {
      icon: 'fas fa-random',
      title: 'SKILLS.FLEXIBILITY',
    },
    {
      icon: 'fas fa-brain',
      title: 'SKILLS.FAST_LEARNING',
    },
  ];
}
