import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import "@angular/material/prebuilt-themes/indigo-pink.css";
import { ReactiveFormsModule } from '@angular/forms'

import { 
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdIconRegistry,
    MdTooltipModule,
    MdInputModule,
    MdInputContainer,
    
 
  } from '@angular/material';

import 'hammerjs';
import { TestService } from "app/test/test.service";
import { HomeComponent } from "app/admin/home.component";
import { AddComponent } from './admin/add/add.component';
import { PersonService } from "app/admin/admin.service";
import { HttpModule } from "@angular/http";



export const routes : Routes = [
  { path:'', component: AddComponent},
  { path:'home', component: TestComponent},
  { path:'admin', component: HomeComponent},
  { path:'admin/add', component: AddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    MdInputModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    MdIconRegistry,
    TestService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
