import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kartica',
  templateUrl: './kartica.component.html',
  styleUrls: ['./kartica.component.css']
})
export class KarticaComponent implements OnInit {

  cardForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardno: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required]

    });
}}
