import { StarService } from '../star.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  startForm: FormGroup;

  constructor(private fb: FormBuilder,private _starService: StarService) { }

  ngOnInit() {
    this.startForm = this.fb.group({
        firstName: ['Francis', Validators.required],
        lastName: ['Vaz', Validators.required],
        email: ['francisxvaz@gmail.com', Validators.required],
        mobile: ['0403698088'],
        adults: ['1', Validators.required],
        children: ['0', Validators.required],
        infants: ['0', Validators.required]
    });
  }
  onSubmit() {
    this._starService.create(this.startForm.value).subscribe();
  }
}
