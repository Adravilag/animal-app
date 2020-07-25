import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Rutas
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Pipes
import { BirthdayPipe } from './pipes/birthday.pipe';
import { SpeciesPipe } from './pipes/species.pipe';
import { PersonalityPipe } from './pipes/personality.pipe';

// Componentes
import { VillagersComponent } from './components/villagers/villagers.component';
import { MusicComponent } from './components/music/music.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { VillagerComponent } from './components/villager/villager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VillagersComponent,
    MusicComponent,
    BirthdayPipe,
    SpeciesPipe,
    PersonalityPipe,
    PaginationComponent,
    NoimagePipe,
    VillagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true}),
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
