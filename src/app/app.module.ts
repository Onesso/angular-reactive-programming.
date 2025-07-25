import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CourseComponent} from './course/course.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {LoginComponent} from './login/login.component';
import {LessonComponent} from './lesson/lesson.component';
import {SafeUrlPipe} from './common/safe-url.pipe';
import {MessagesComponent} from './messages/messages.component';
import {SearchLessonsComponent} from './search-lessons/search-lessons.component';
import { LoadingComponent } from './loading/loading.component';
import { CoursesCardListComponent } from "./courses-card-list/courses-card-list.component";

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CourseComponent,
        CourseDialogComponent,
        LoginComponent,
        LessonComponent,
        SafeUrlPipe,
        MessagesComponent,
        SearchLessonsComponent,
        LoadingComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule, CoursesCardListComponent], providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {
}
