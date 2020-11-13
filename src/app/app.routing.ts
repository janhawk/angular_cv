import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';

const APP_ROUTING: Routes = [
  { path: 'cv', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
];
// routing param /:default

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

// Mise en place d'un système de routing
// Tout système de routing permet d’associer une route à un traitement

// Angular SPA. Pourquoi parle-on de route ??
// Séparer différentes fonctionnalités du système
// Maintenir l’état de l’application
// Ajouter des règles de protection
// Que risque t-on d’avoir si on n’utilise pas un système de routing ?
// On ne peut plus rafraîchir notre page
// Plus de Favoris
