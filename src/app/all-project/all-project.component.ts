import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-project.component.html',
  styleUrl: './all-project.component.css',
})
export class AllProjectComponent {
  projects = [
    {
      title: 'BuildFlow-Manager',
      description:
        'BuildFlow Manager is a web-based app that helps construction teams efficiently plan, organize, and track projects in real time.',
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
      description:
        'CookSpot is a user-friendly website that provides delicious recipes, cooking tips, and meal planning ideas to inspire home cooks and food enthusiasts.',
      UrlLink: 'https://github.com/soufyane-felate/weather',
      langue: ['html', 'css', 'js'],
      Image: [
        '../../assets/images/cookspot.png',
        '../../assets/images/cookspot2.png',
      ],
    },
    {
      title: 'movies',
      description:
        'A movie website that offers users the latest films, trailers, reviews, and detailed information about upcoming releases, all in one place.',
      UrlLink: 'https://github.com/soufyane-felate/Movies',
      langue: ['js', 'html', 'css'],
      Image: [
        '../../assets/images/movies.png',
        '../../assets/images/movies2.png',
      ],
    },
    {
      title: 'Wheater',
      description:
        'CookSpot is a user-friendly recipe website where food lovers can discover, share, and save delicious recipes from around the world. Perfect for home cooks and foodies alike!',
      UrlLink: 'https://github.com/soufyane-felate/weather',
      langue: ['html', 'css', 'js'],

      Image: [
        '../../assets/images/wheath.png',
        '../../assets/images/wheath2.png',
        '../../assets/images/wheath3.png',
      ],
    },
  ];
}
