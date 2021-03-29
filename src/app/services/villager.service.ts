import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Animal } from '../model/animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VillagerService {

  constructor(private http: HttpClient) { }

  loadVillagers() : Observable<Animal[]> {
    return this.http.get('http://acnhapi.com/v1/villagers').pipe(
      map((data: string) => {
        const keys = Object.keys(data);
        let lista: Animal[] = [];
        for (let i = 0; i < keys.length; ++i) {
          lista.push(data[keys[i]]);
        }
        return lista;
      })
    );
  }

  searchVillagers(name: string, gender: string, species: string, personality: string, location: string) : Observable<Animal> {

    let animal = this.getVillagers();

    return animal.pipe(
      map((resp : any) => {
        if (gender !== 'all')
          resp = resp.filter(value => value.gender === gender);
        if (species !== 'all')
          resp = resp.filter(value => value.species.toLowerCase() === species.toLowerCase());
        if (personality !== 'all')
          resp = resp.filter(value => value.personality.toLowerCase() === personality.toLowerCase());
        return (
          resp.filter(value => value.name[location].toLowerCase().indexOf(name.toLowerCase()) >= 0)
        );
      })
    );
  }

  getVillagers() : Observable<Animal[]> {

    return this.loadVillagers();

  }

  getVillager(termino: string) {
    return this.http.get(`http://acnhapi.com/v1/villagers/${termino}`);
  }

  getSpecies() {
    return [
      'Alligator',
      'Anteater',
      'Bear',
      'Bird',
      'Bull',
      'Cat',
      'Chicken',
      'Cow',
      'Cub',
      'Deer',
      'Dog',
      'Duck',
      'Eagle',
      'Elephant',
      'Frog',
      'Goat',
      'Gorilla',
      'Hamster',
      'Hippo',
      'Horse',
      'Kangaroo',
      'Koala',
      'Lion',
      'Monkey',
      'Mouse',
      'Octopus',
      'Ostrich',
      'Penguin',
      'Pig',
      'Rabbit',
      'Rhino',
      'Sheep',
      'Squirrel',
      'Tiger',
      'Wolf',
    ];
  }

  getPersonalities() {
    return [
      'Cranky',
      'Jock',
      'Uchi',
      'Peppy',
      'Snooty',
      'Lazy',
      'Normal',
      'Smug',
    ];
  }
}
