import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsListComponent } from "./skills-list.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillsListComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    {
      title: 'HTML',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    },
    {
      title: 'CSS',
      image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    },
    {
      title: 'BOOTSTRAP',
      image: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png',
    },
    {
      title: 'JS',
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      title: 'JAVA',
      image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    },
    {
      title: 'SPRING BOOT',
      image: 'https://www.svgrepo.com/show/354380/spring-icon.svg',
    },
    {
      title: 'ANGULAR',
      image: 'https://www.svgrepo.com/show/353396/angular-icon.svg',
    },
    {
      title: 'FLUTTER',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
      title: 'GIT',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      title: 'SQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    // Added requested skills
    {
      title: 'DOCKER',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      title: 'FIGMA',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      title: 'VS CODE',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      title: 'INTELLIJ',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    },
    {
      title: 'ANDROID STUDIO',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
    },
    {
      title: 'GITHUB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      title: 'POSTMAN',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    },
  ];
}