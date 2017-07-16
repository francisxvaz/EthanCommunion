import { Component, OnInit } from '@angular/core';
import { Person } from "app/admin/person";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people : Person[] =  [
    { fName : "Arun", lName : "DSouza", sName : "Lallita", email : "arun@arun.com"  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
