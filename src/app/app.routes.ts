import {RouterModule, Routes } from '@angular/router';
import {Contact} from './contact/contact';
import {App} from './app';
import {Home} from './home/home';
import {Diary} from './diary/diary';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home }, // Contenu spécifique
      { path: 'contact', component: Contact},
      { path: 'diary', component: Diary}

];
