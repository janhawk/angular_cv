import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>;
  mesImages = ['cv.png', '404.jpg', 'rotating_card_profile2.png'];
  currentImage: string;
  constructor() {}

  ngOnInit(): void {
    this.monObservable = new Observable((observer) => {
      let i = this.mesImages.length - 1;
      setInterval((callback) => {
        observer.next(this.mesImages[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.mesImages.length - 1;
        }
      }, 1500);
    });
    this.monObservable.subscribe((result: any) => {
      console.log(result);
      this.currentImage = result;
    });
  }
}
// Programmation reactive =
// Flux de données (observable) + écouteurs d’événements (observer).

// Le patron de conception Observable permet à un objet de garder la trace d'autres objets, intéressés par l'état de ce dernier.

// Il définit une relation entre objets de type un-à-plusieurs.

// Lorsque l’état de cet objet change, il notifie ces observateurs.
// ------
// Promesse Vs Observable

// Promesse:
// un promesse gere un seul evenement,
// non annulable,
// traitement immediat,
// deux uniquement (then/catch).

// Observable:
// un observable gere flux d'evenement,
// annulable,
// lazy: le traitement n'est declenché qu'a la premiere utilisation du resultat.
// une centaine d'operateur de transformation natifs (maps, reduce, merge, filter,...).operateurs tels que retry, reply.
