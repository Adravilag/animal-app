import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VillagersComponent } from './components/villagers/villagers.component';
import { MusicComponent } from './components/music/music.component';
import { VillagerComponent } from './components/villager/villager.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'villagers', component: VillagersComponent },
    { path: 'villager/:id', component: VillagerComponent },
    { path: 'music', component: MusicComponent },
    { path: '', pathMatch: 'full', redirectTo:'home'},
    { path: '**', pathMatch: 'full' , redirectTo: 'home' }
];
