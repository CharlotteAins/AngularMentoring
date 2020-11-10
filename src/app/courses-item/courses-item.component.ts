import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../interfaces/course';

@Component( {
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: [ './courses-item.component.css' ]
} )
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteHandler = new EventEmitter<string>();

  constructor () { }

  ngOnInit(): void {
  }

  delete( id: string ): void {
    const answer: boolean = window.confirm( 'Do you really want to delete this course?' );

    if ( answer ) {
      this.deleteHandler.emit( id );
    }
  }
}
