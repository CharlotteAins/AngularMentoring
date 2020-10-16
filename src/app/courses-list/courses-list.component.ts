import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public allCourses;
  public searchParam;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe(courses => this.allCourses = courses);
  }

  search(): void {
    console.log(this.searchParam);
  }

  delete(id: string): void {
    this.courseService.delete(id);
    this.loadCourses();
  }
}
