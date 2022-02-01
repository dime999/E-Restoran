import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviess-list',
  templateUrl: './moviess-list.component.html',
  styleUrls: ['./moviess-list.component.css']
})
export class MoviessListComponent implements OnInit {

  

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  @Input()
  movies;

  @Output()
  onDelete = new EventEmitter<void>();

  remove(id: number){
    this.moviesService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }
}
