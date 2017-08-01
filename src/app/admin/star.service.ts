import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Star } from './star';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class StarService {

  constructor(private _http: HttpClient) { }

  getStars() {
      return this._http.get('http://localhost:58215/api/stars')
  }
}
