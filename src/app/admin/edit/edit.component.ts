import { ActivatedRoute } from '@angular/router';
import { Star } from '../star';
import { StarService } from '../star.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;

  starForm: FormGroup;

  currentStar: Star;

  constructor(private fb: FormBuilder,private _starService: StarService, private router: ActivatedRoute) { }

   ngOnInit() {

    this.router.params.subscribe(o => this.id = o['id']);

    this.starForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: [''],
      adults: ['', Validators.required],
      children: ['', Validators.required],
      infants: ['', Validators.required]
    });

    this._starService.getStar(this.id).subscribe(data => {
            this.currentStar = data;
            this.starForm.setValue({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              mobile: data.mobile,
              adults: data.adults,
              children: data.children,
              infants: data.infants
            });
    });

  }
  onSubmit() {
    this._starService.edit(this.starForm.value, this.id).subscribe();
  }
}
