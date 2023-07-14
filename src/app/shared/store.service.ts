import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  data:Store={
    title: '',
    description: '',
    date: new Date()
  };
}
