import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown';
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png";

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { MapComponent } from './utilities/map/map.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviessListComponent } from './movies/moviess-list/moviess-list.component';
import { KorpaIndexComponent } from './korpa/korpa-index/korpa-index.component';
import { JeloListComponent } from './jelo/jelo-list/jelo-list.component';
import { NarudzbaDetaljiComponent } from './narudzba/narudzba-detalji/narudzba-detalji.component';

import { KarticaComponent } from './kartica/kartica.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { RezervacijeComponent } from './actors/rezervacije/rezervacije.component';
import { NarudzbeComponent } from './actors/narudzbe/narudzbe.component';
import { DetaljiNarudzbeComponent } from './actors/detalji-narudzbe/detalji-narudzbe.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMovieTheaterComponent,
    EditMovieComponent,
    MovieFilterComponent,
    FormGenreComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
    DisplayErrorsComponent,
    MovieDetailsComponent,
    MoviessListComponent,
    KorpaIndexComponent,
    JeloListComponent,
    NarudzbaDetaljiComponent,
 
    KarticaComponent,
 
    RezervacijeComponent,
 
    NarudzbeComponent,
 
    DetaljiNarudzbeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgPaymentCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
