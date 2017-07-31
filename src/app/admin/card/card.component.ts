import { any } from 'codelyzer/util/function';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  sub: any;
  name: string;
  id: string;
  message: string;
  accepted: boolean;

  constructor(private route: ActivatedRoute) {
    this.message = 'We would like to invite you all for';
    this.accepted = false;
    console.log('to base: ' + btoa('ARUN DSOUZA'));
     this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.name = atob(this.id);
    });
  }

  action() {
    this.accepted = true;
    this.message = 'THANK YOU FOR ACCEPTING THE INVITATION FOR';
  }
}

