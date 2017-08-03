import { Action } from 'rxjs/scheduler/Action';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class StarEffects {

    constructor(private action$: Actions) { }
}
