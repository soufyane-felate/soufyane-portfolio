import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, TranslateModule,SkillsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  selectedLanguage: string = 'all';
  displayedProjects: any[] = [];

  projects = [
    {
      title: 'BuildFlow-Manager',
      descriptionKey:
        'PROJECTS.BUILD_FLOW_DESCRIPTION',
      UrlLink: 'https://github.com/soufyane-felate/BuildFlow-Manager',
      langue: ['java', 'html', 'css', 'jee', 'js'],
      Image: [
        '../../assets/images/build.jpg',
        '../../assets/images/buildFlow.png',
        '../../assets/images/buildFlow2.png',
        '../../assets/images/buildFlow3.png',
      ],
    },
    {
      title: 'cookspot',
      descriptionKey:
        'PROJECTS.COOKSPOT_DESCRIPTION',
      UrlLink: 'https://github.com/soufyane-felate/weather',
      langue: ['html', 'css', 'js'],
      Image: [
        '../../assets/images/cookspot.png',
        '../../assets/images/cookspot2.png',
      ],
    },
    {
      title: 'movies',
      descriptionKey:
        'PROJECTS.MOVIES_DESCRIPTION',
      UrlLink: 'https://github.com/soufyane-felate/Movies',
      langue: ['js', 'html', 'css'],
      Image: [
        '../../assets/images/movies.png',
        '../../assets/images/movies2.png',
      ],
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.displayedProjects = this.projects.slice(0, 3);
  }

  getLanguages(): string[] {
    const langs = new Set(this.projects.flatMap((p) => p.langue));
    return ['all', ...langs];
  }

  filteredProjects() {
    if (this.selectedLanguage === 'all') return this.displayedProjects;
    return this.displayedProjects.filter((p) =>
      p.langue.includes(this.selectedLanguage)
    );
  }

  setFilter(lang: string) {
    this.selectedLanguage = lang;
  }
}

