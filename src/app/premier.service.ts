import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PremierService {
  data = ['data1', 'data2', 'data3', 'data4'];

  constructor() {}
  logger(data): void {
    console.log(this.data);
    console.log(data);
  }

  addData(data): void {
    this.data.push(data);
  }
}

// Un service est un médiateur entre la vue et la logique.
// Ce qui n’est pas trivial doit être écrit sous forme d’un composant.
// Un service est associé à un composant en utilisant l’injection de dépendance.
// L’injection de dépendance utilise les étapes suivantes :
// Déclarer le service dans le provider du module ou du composant.
// Passer le service comme paramètre du constructeur de l’entité qui en a besoin.

// un service est une classe  qui va contenir du code metier qui va servir a l'ensemble.
// des autres elements du ecosysteme angular.
