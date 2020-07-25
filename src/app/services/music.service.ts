import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {
    console.log('Music service listo');
  }

  getMusics() {
    return this.http.get('http://acnhapi.com/v1/songs').pipe(
      map((data) => {
        const keys = Object.keys(data);
        let lista: string[] = [];
        for (let i = 0; i < keys.length; ++i) {
          lista.push(data[keys[i]]);
        }
        return lista;
      })
    );
  }

  getMusic(termino: string) {
    return this.http.get(`http://acnhapi.com/v1/songs/${termino}`).pipe(
      map((data: any) => {

        console.log(data);
        return data;
      })
    );
  }
}
