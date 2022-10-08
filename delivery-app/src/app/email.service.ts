import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private api = 'https://mailthis.to/Zhanna'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          return response;
        }
      ),
      (error: any) => {
        return error;
      }
    )
  }
}
