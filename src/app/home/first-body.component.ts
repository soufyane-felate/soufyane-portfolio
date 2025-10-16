import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AllProjectComponent } from '../all-project/all-project.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-first-body',
  standalone: true,
  imports: [RouterModule, AboutComponent, AllProjectComponent,
    ContactComponent, ExperienceComponent, FooterComponent,
    ProjectsComponent, SkillsComponent, TranslateModule, NavbarComponent],
  templateUrl: './first-body.component.html',
  styleUrl: './first-body.component.css'
})
export class FirstBodyComponent {

}
