import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstBodyComponent } from './home/first-body.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { TranslateService } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkillsComponent,
    ExperienceComponent,
    NavbarComponent,
    FirstBodyComponent,
    AboutComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    CvComponent,
    MatSlideToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isDarkMode: boolean = false;
  isWhiteMode: boolean = true;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme');
      this.isDarkMode = theme === 'dark';
      this.isWhiteMode = theme === 'white' || !theme;
      this.applyTheme();
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      this.isWhiteMode = true;
    } else {
      this.isDarkMode = true;
      this.isWhiteMode = false;
    }
    this.applyTheme();
  }

  setWhiteMode() {
    this.isDarkMode = false;
    this.isWhiteMode = true;
    this.applyTheme();
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('white-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('white-theme');
        localStorage.setItem('theme', 'white');
      }
    }
  }
}
