import {RouterModule, Routes } from '@angular/router';
import {Contact} from './contact/contact';
import {App} from './app';
import {Home} from './home/home';
import {Diary} from './diary/diary';
import {Show} from './shows/show';
import {Directory} from './directory/directory';
import {Expositions} from './expositions/expositions';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home }, // Contenu spécifique
      { path: 'contact', component: Contact},
      { path: 'diary', component: Diary},
      { path: 'show', component: Show },
      { path: 'directory', component: Directory},
      { path: 'expositions', component: Expositions}

];
