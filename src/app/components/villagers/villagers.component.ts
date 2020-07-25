import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VillagerService } from './../../services/villager.service';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faVenus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.css'],
})
export class VillagersComponent {
  // API
  villagers: any[] = [];
  species: string[] = [];
  species_org: string[] = [];
  personalities: string[] = [];

  // Pagination
  p: number = 1;

  // Font Awesome
  faBirthdayCake = faBirthdayCake;
  faMars = faMars;
  faVenus = faVenus;

  // Loading
  loading: boolean;

  // Filter
  gender: string = 'all';
  personality: string = 'all';
  specie: string = 'all';
  termino: string = '';

  constructor(
    private villagerService: VillagerService,
    private router: Router
  ) {
    this.loading = true;
    this.villagerService.getVillagers().subscribe((data: any) => {
      this.villagers = data;
      this.loading = false;
    });
    this.species = this.villagerService.getSpecies();
    this.personalities = this.villagerService.getPersonalities();
  }

  getVillager(termino: string) {
    this.router.navigate(['villager', termino]);
  }

  // Filtros

  filterGender(value: string) {
    this.gender = value;
    this.searchVillager(this.termino);
  }

  filterSpecie(value: string) {    
    this.specie = value;
    this.searchVillager(this.termino);
  }

  filterPersonality(value: string) {    
    this.personality = value;
    this.searchVillager(this.termino);
  }

  searchVillager(termino: string) {
    this.p = 1;
    this.loading = true;
    this.termino = termino;
    this.villagerService.searchVillagers(termino, this.gender, this.specie, this.personality).subscribe((data: any) => {
      this.villagers = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
