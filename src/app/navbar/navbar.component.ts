import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [CommonModule, MatSlideToggleModule, FormsModule, RouterModule],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Output() themeToggled = new EventEmitter<void>();

  isMenuOpen = false;

  navItems = [
    { label: 'Home', link: 'home', type: 'anchor' },
    { label: 'About', link: 'About', type: 'anchor' },
    { label: 'Projects', link: 'project', type: 'anchor' },
    { label: 'CV', type: 'action', action: () => this.downloadCV() },
    { label: 'Contact', link: 'contact-section', type: 'anchor' },
  ];

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleItemClick(item: any, event: Event): void {
    if (item.type === 'action' && item.action) {
      item.action();
    }

    this.isMenuOpen = false;
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
  }
}
