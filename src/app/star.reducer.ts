import { Star } from './admin/star';
import { Action } from '@ngrx/store';

export const ADD_STAR = 'ADD_STAR';
export const EDIT_STAR = 'ADD_STAR';
export const GET_STAR = 'GET_STAR';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILED = 'EDIT_FAILED';
export function StarReducer(state: Star[] = [], action: Action) {
    console.log(state);
    switch (action.type) {
        case ADD_STAR:
            return [...state, action]
        case EDIT_STAR:
            return [...state, action]
        case GET_STAR:
            return [...state, action]
        case EDIT_SUCCESS:
            return state;
        case EDIT_FAILED:
            return state;
        default:
            return state;
    }
}
