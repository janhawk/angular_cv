import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    children: [
      // use this
      // or this
      // path: 'cv',
      // children: [
      // children = 2 vision :
      // 1rst when i only need the son will show on another page and 2nd when u need
      //  the son will be shown in the same page.
      { path: '', component: CvComponent },
      { path: 'delete/:id', component: DeleteCvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: DetailComponent }, // always to put in the end pr ne pas masquer les autres routes
    ],
  },
  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: '**', component: ErrorComponent },
  // routing example2

  // { path: 'cv', component: CvComponent },
  // { path: 'cv/:id', component: DetailComponent },
  // // Passer le paramètre à travers le tableau de routerLink
  // // Une autre méthode permet de passer le paramètre de la route
  // //  est en l’ajoutant comme un autre attribut du
  // //   tableau associé au routerLink.

  // // { path: 'cv', redirectTo: '/', pathMatch: 'full' },
  // { path: 'cv/delete/:id', component: DeleteCvComponent },
  // { path: 'cv/add', component: AddCvComponent },

  // { path: '', component: CvComponent },
  // { path: 'color/:default', component: ColorComponent },
  // routing example1
];
// routing param /:default

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

// Mise en place d'un système de routing
// Tout système de routing permet d’associer une route à un traitement

// Angular SPA. Pourquoi parle-on de route ??
// Séparer différentes fonctionnalités du système.
// Maintenir l’état de l’application.
// Ajouter des règles de protection.
// Que risque t-on d’avoir si on n’utilise pas un système de routing ?
// On ne peut plus rafraîchir notre page.
// Plus de Favoris.
