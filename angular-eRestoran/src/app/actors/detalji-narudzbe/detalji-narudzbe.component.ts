import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap, coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { movieTheatersCreationDTO, movieTheatersDTO } from 'src/app/movie-theaters/movie-theaters.model';
import { MoviesService } from 'src/app/movies/movies.service';
import { movieDTO } from 'src/app/movies/movies.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalji-narudzbe',
  templateUrl: './detalji-narudzbe.component.html',
  styleUrls: ['./detalji-narudzbe.component.css']
})
export class DetaljiNarudzbeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private moviesService: MoviesService , private activatedRoute: ActivatedRoute) { }
 

  ngOnInit(): void {
    
  }
}
