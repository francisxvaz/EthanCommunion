import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  post(resp:boolean): void{
    console.log(resp);
  }

  get(id:string){
    return {
      name: 'Arun',
      spouse: 'Lallita'
    }
  }
}
