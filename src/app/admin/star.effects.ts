import { StarService } from './star.service';
import { Action } from 'rxjs/scheduler/Action';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ADD_STAR, EDIT_STAR, GET_STAR, EDIT_SUCCESS, EDIT_FAILED } from '../star.reducer';

@Injectable()
export class StarEffects {

    @Effect() edit$: Observable<any> = this.action$
        .ofType(EDIT_STAR)
        .map(a => a)
        // .switchMap(payload => this._http.put('http://localhost:58215/api/stars/edit', payload)
        .switchMap(payload => this._starService.edit(payload, 1))
        .map(res => ({ type: EDIT_SUCCESS, payload: res }))
        .catch(() => Observable.of({type: EDIT_FAILED}))
        ;

        constructor(
        private action$: Actions,
        private _http: HttpClient,
        private _starService: StarService
    ) { }
}
