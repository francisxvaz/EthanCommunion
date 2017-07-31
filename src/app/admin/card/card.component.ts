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
  constructor(private route: ActivatedRoute) {
    console.log('to base: ' + btoa('ARUN'));
     this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.name = atob(this.id);
    });
  }

  action() {
    // console.log('to base: ' + btoa('Arun'));
    // console.log('from base:' + atob('YXJ1bg=='));
    // console.log(`${this.name} has accepted the invitation for Ethan's communion`) ;
  }
}

