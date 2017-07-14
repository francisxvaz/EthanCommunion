import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Person } from "app/admin/person";

@Injectable()
export class PersonService {
    constructor(private http: Http) { 

       
    }

    add(person: Person){
         console.log('In '+ JSON.stringify(person));
         
    }
    
}