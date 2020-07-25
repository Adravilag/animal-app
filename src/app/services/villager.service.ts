import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VillagerService {
  constructor(private http: HttpClient) {
    console.log('Villager service listo');
  }

  searchVillagers(termino: string, gender: string = "all", specie: string = "all", personality: string = "all") {
    return this.http.get(`http://acnhapi.com/v1/villagers`).pipe(
      map((data: any) => {
        const keys = Object.keys(data);
        let lista: any[] = [];
        for (let i = 0; i < keys.length; ++i) {
          let res_specie = data[keys[i]].species.toLowerCase();
          let res_personality = data[keys[i]].personality.toLowerCase();
          let res_gender = data[keys[i]].gender.toLowerCase();
          let res_name = data[keys[i]].name['name-EUes'].toLowerCase();
          termino = termino.toLowerCase();
          if (specie.toLowerCase() === res_specie || specie == 'all') {
            if (gender.toLowerCase() === res_gender || gender == 'all') {
              if ( personality.toLowerCase() === res_personality || personality == 'all') {                
                if (res_name.indexOf(termino) >= 0) {
                  lista.push(data[keys[i]]);
                }
              }
            }
          }

        }
        return lista;
      })
    );
  }

  getVillagers() {
    return this.http.get('http://acnhapi.com/v1/villagers').pipe(
      map((data: any) => {
        const keys = Object.keys(data);
        let lista: string[] = [];
        for (let i = 0; i < keys.length; ++i) {
          lista.push(data[keys[i]]);
        }
        return lista;
      })
    );
  }

  getVillager(termino: string) {
    return this.http.get(`http://acnhapi.com/v1/villagers/${termino}`).pipe(
      map((data: any) => {
        return data;
      })
    );
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
