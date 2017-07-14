import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { PersonService } from "app/admin/admin.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addPersonFormGroup: FormGroup;

  constructor(private fb:FormBuilder,private _person:PersonService) { }

  ngOnInit() {
    this.addPersonFormGroup = this.fb.group({
        fname:['Arun', Validators.required],
        lname:['DSouza', Validators.required],
        sname:['Lallita', Validators.required],
        email:['arun@arun.com', Validators.required],
    });
  }

  onSubmit(){
    this._person.add(this.addPersonFormGroup.value);
  }
}
