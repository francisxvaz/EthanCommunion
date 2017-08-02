import { InvitationService } from '../invitation.service';
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

  constructor(private route: ActivatedRoute,private invitationService: InvitationService) {
    this.message = 'We would like to invite you all for';
    this.accepted = false;
     this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.name = atob(this.id);
    });
  }

  action() {
    console.log(this.id);
     this.invitationService.add(true, +this.id).subscribe();
    // this.invitationService.add(true, 1).subscribe();
    // this.accepted = true;
    // this.message = 'THANK YOU FOR ACCEPTING THE INVITATION FOR';
  }
}

