import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from 'src/app/movie-theaters/movie-theaters.model';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';

@Component({
  selector: 'app-narudzba-detalji',
  templateUrl: './narudzba-detalji.component.html',
  styleUrls: ['./narudzba-detalji.component.css']
})
export class NarudzbaDetaljiComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  form: FormGroup

  @Input()
  model: movieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      broj: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
  Navedi()
  {
    this.router.navigate(['/movies/filter'])
  }
}
