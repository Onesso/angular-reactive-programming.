import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "courses-card-list",
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: "./courses-card-list.component.html",
  styleUrl: "./courses-card-list.component.scss",
})
export class CoursesCardListComponent {
  @Input()
  courses: Course[] = []; //api level data source

  constructor(private dialog: MatDialog) {}

  //edit course button logic.
  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
  logid(id: number) {
    console.log("View course pressed. id is:");
    console.log(id);
  }
}
