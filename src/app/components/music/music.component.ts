import { Component } from '@angular/core';
import { MusicService } from './../../services/music.service'
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html'
})
export class MusicComponent {

  musics: any[] = [];

  constructor(private musicService: MusicService) { 
    this.musicService.getMusics().subscribe((data:any) => {
      this.musics = data;      
    })
  }

  getMusic(id: string)
  {
    return this.musicService.getMusic(id);
  }

}
