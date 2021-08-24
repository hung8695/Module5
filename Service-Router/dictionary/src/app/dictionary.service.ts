import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord [] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'one', meaning: 'Một'},
    {key: 'two', meaning: '2'},
    {key: 'three', meaning: '3'},
    {key: 'four', meaning: '4'},
  ];
  constructor() { }
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found!';
  }
}
