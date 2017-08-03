import { LogHttpInterceptor } from './http.interceptor';
import { InvitationService } from './admin/invitation.service';
import { EditComponent } from './admin/edit/edit.component';
import { StarService } from './admin/star.service';
import { CardComponent } from './admin/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from '@angular/material';
import { AdminModule } from './admin/admin.module';

import 'hammerjs';
import { TestService } from 'app/test/test.service';
import { HomeComponent } from 'app/admin/home.component';
import { AddComponent } from './admin/add/add.component';
import { PersonService } from 'app/admin/admin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListComponent } from 'app/admin/list/list.component';



export const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'home', component: TestComponent},
  { path: 'admin', component: HomeComponent},
  { path: 'admin/add', component: AddComponent},
  { path: 'admin/edit/:id', component: EditComponent},
  { path: 'admin/list', component: ListComponent},
  { path: 'admin/card/:id', component: CardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AddComponent,
    CardComponent,
    EditComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    TestService,
    PersonService,
    StarService,
    InvitationService,
    { provide: HTTP_INTERCEPTORS, useClass: LogHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
