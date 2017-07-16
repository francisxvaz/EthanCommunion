import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import "@angular/material/prebuilt-themes/indigo-pink.css";
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from '@angular/material';
import { AdminModule } from './admin/admin.module';

import 'hammerjs';
import { TestService } from "app/test/test.service";
import { HomeComponent } from "app/admin/home.component";
import { AddComponent } from './admin/add/add.component';
import { PersonService } from "app/admin/admin.service";
import { HttpModule } from "@angular/http";
import { ListComponent } from "app/admin/list/list.component";



export const routes : Routes = [
  { path:'', component: ListComponent},
  { path:'home', component: TestComponent},
  { path:'admin', component: HomeComponent},
  { path:'admin/add', component: AddComponent},
  { path:'admin/list', component: ListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    TestService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
