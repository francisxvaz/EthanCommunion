import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'
import { TestService } from "app/test/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    const t = this.testService.get("id");
    this.name = t.name;
    this.spouse = t.spouse;
  }

  result(res:boolean){
    this.testService.post(res);
  }

  name = "";

  spouse = "sdfsf";

  position = 'before';
}
