import { StarReducer } from '../../star.reducer';
import { ActivatedRoute } from '@angular/router';
import { Star } from '../star';
import { StarService } from '../star.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import { ADD_STAR, EDIT_STAR, GET_STAR } from '../../star.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;

  starForm: FormGroup;

  currentStar: Star;

  constructor(private fb: FormBuilder, private _starService: StarService,
              private router: ActivatedRoute, public snackBar: MdSnackBar,
              private _store: Store<any>) { }

   ngOnInit() {

    this.router.params.subscribe(o => this.id = o['id']);

    this.starForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: [''],
      adults: ['', Validators.required],
      children: ['', Validators.required],
      infants: ['', Validators.required],
      password: ['', Validators.required]
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
              infants: data.infants,
              password: data.password
            });
    });

  }
  onSubmit() {

    this._store.dispatch({type: EDIT_STAR, payload: this.starForm.value})
    // this._starService.edit(this.starForm.value, this.id).subscribe(o => {
    //   this.snackBar.open('Star updated', 'close', {
    //      duration: 2000,
    //   }) ;
    // });
  }
}
