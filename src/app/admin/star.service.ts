import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Star } from './star';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

@Injectable()
export class StarService {

  constructor(private _http: HttpClient) { }

  accept(accepted: boolean, token: string) {
    const data = {
        accepted,
        token
    };
    return this._http.put('http://localhost:58215/api/stars/accept', data);
  }

  getStars() {
      return this._http.get<Star[]>('http://localhost:58215/api/stars');
  }

  getStar(id: number) {
      return this._http.get<Star>('http://localhost:58215/api/stars/' + id);
  }

  create(star) {
      return this._http.post('http://localhost:58215/api/stars/create', star);
  }

  edit(star, id) {
      star.id = id;
      return this._http.put('http://localhost:58215/api/stars/edit', star);
  }
}
