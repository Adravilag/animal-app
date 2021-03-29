import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VillagerService } from 'src/app/services/villager.service';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faVenus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.css']
})
export class VillagerComponent implements OnInit {

  // Villager
  villager: any = {};
  // Font Awesome
  faBirthdayCake = faBirthdayCake;
  faMars = faMars;
  faVenus = faVenus;
searchVillagers
  constructor(private activatedRoute: ActivatedRoute, private villagerService: VillagerService) {
    this.activatedRoute.params.subscribe( params => {
      this.getVillager(params['id']);
    });
  }

  getVillager(id: string)
  {
    this.villagerService.getVillager(id).subscribe( villager => {
      this.villager = villager;
      console.log(this.villager);
    });
  }

  ngOnInit(): void {
  }

}
