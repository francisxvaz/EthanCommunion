import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Star } from './star';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class InvitationService {

  constructor(private _http: HttpClient) { }

  add(accepted: boolean, id: number) {
      const data = {
        id,
        accepted: accepted
      }
      return this._http.put('http://localhost:58215/api/stars/invitaion', data);
  }
}
