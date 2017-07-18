import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'app/admin/admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addPersonFormGroup: FormGroup;

  constructor(private fb: FormBuilder,private _person: PersonService) { }

  ngOnInit() {
    this.addPersonFormGroup = this.fb.group({
        familyName: ['', Validators.required],
        invited: [true, Validators.required],
        email: ['', Validators.required],
        line1: ['', Validators.required],
        line2: ['', Validators.required],
        states : [
          {value: 'NSW', viewValue: 'New South Wales'},
          {value: 'VIC', viewValue: 'Victoria'}
        ],
        country: [''],
        postcode: [''],
        members: [
          { fname: '', relation: '', invitationAccepted : true }
        ]
    });
  }
  onSubmit() {
    this._person.add(this.addPersonFormGroup.value);
  }
}
