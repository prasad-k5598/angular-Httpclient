import { Injectable } from '@angular/core';

//import HttpClient

import { HttpClient } from '@angular/common/http';

@Injectable()
export class accessService {
  // include HttpClient in constructor
  constructor(private http: HttpClient) {}
}
