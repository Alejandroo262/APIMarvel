import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, pipe, Subscription} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HeroService {

  //private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  /** GET heroes from the server */
  getHeroes() {
    return this.http.get('https://gateway.marvel.com/v1/public/characters?ts=alejandro&apikey=d5e45aa61fb2a328e9f07eec1abe74ce&hash=cf2f61312244092a712fad6fa9b175ce', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }))
  }

  getHero(id: number) {
    return this.http.get('https://gateway.marvel.com/v1/public/characters/' + id + '?ts=alejandro&apikey=d5e45aa61fb2a328e9f07eec1abe74ce&hash=cf2f61312244092a712fad6fa9b175ce', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }))
  }
}

