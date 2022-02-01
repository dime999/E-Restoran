import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jelo-list',
  templateUrl: './jelo-list.component.html',
  styleUrls: ['./jelo-list.component.css']
})
export class JeloListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  movies:any;

}
