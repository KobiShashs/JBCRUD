import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  public num: number;
  public constructor() { }


  public getNum(): number{
    return this.num;
  }

  public setNum(num: number): void{
    this.num = num;
  }
}
