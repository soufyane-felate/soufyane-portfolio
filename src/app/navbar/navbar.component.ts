import { Component, Output, EventEmitter, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Output() languageChanged = new EventEmitter<string>();
  @Output() themeToggled = new EventEmitter<void>();

  currentLanguage: string = 'en';

  navItems = [
    { labelKey: 'HEADER.HOME', link: 'home', type: 'anchor' },
    {  link: 'About', type: 'anchor' },
    { labelKey: 'HEADER.PROJECTS', link: 'project', type: 'anchor' },
    { labelKey: 'HEADER.CV', type: 'action', action: () => this.downloadCV() },
    { labelKey: 'HEADER.CONTACT', link: 'contact-section', type: 'anchor' },
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV/CV_FSOUFYANE_O.pdf.pdf';
    link.download = 'soufyane_cv.pdf';
    link.click();
  }

  handleItemClick(item: any, event: Event) {
    if (item.type === 'action' && item.action) {
      event.preventDefault();
      item.action();
    } else if (item.type === 'anchor') {
      event.preventDefault();
      const el = document.getElementById(item.link);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
