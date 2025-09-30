import {RouterModule, Routes } from '@angular/router';
import {Contact} from './contact/contact';
import {App} from './app';
import {Home} from './home/home';
import {Diary} from './diary/diary';
import {Show} from './shows/show';
import {Directory} from './directory/directory';
import {BringTheCompany} from './bring-the-company/bring-the-company';
import {Projects} from './projects/projects';
import {Infos} from './infos/infos';
import {History} from './history/history';
import {Team} from './team/team';


export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home }, // Contenu spécifique
      { path: 'contact', component: Contact},
      { path: 'diary', component: Diary},
      { path: 'show', component: Show },
      { path: 'directory', component: Directory},
      { path: 'bring-the-company', component: BringTheCompany},
      { path: 'projects', component: Projects},
      { path: 'infos', component: Infos},
      { path: 'history', component: History},
      { path: 'team', component: Team}
];
