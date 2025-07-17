import { Course } from "./../model/course";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CourseServices {
    
  constructor(private http: HttpClient) {}

  loadallCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses/");
  }

}
