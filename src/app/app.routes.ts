//app.routes.ts
import { Routes } from '@angular/router';
import { AllProjectComponent } from './all-project/all-project.component';
import { FirstBodyComponent } from './home/first-body.component';
import { CvComponent } from './cv/cv.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: FirstBodyComponent },
  { path: 'home', component: FirstBodyComponent },
  { path: 'allProject', component: AllProjectComponent },
  { path: 'cv', component: CvComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'allProject',
    loadComponent: () =>
      import('./all-project/all-project.component').then(
        (m) => m.AllProjectComponent
      ),
  },
];
