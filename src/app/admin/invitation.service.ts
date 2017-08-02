import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Star } from './star';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class InvitationService {

  constructor(private _http: HttpClient) { }

  add(accepted: boolean, id: number) {
      console.log('accepted' + accepted + 'id = ' + id)
      const data = {
        starId: id,
        accepted: accepted
      }
      return this._http.post('http://localhost:58215/api/invitaion/accept', data);
  }
}
