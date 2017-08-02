import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  post(resp:boolean): void{
  }

  get(id:string){
    return {
      name: 'Arun',
      spouse: 'Lallita'
    }
  }
}
