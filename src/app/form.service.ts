import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

declare var Materialize: any;

@Injectable()
export class FormService {

  private static defaultHeaders: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  sendForm(formEntry: Object): Observable<Object> {
    const options: RequestOptions = new RequestOptions({headers: FormService.defaultHeaders});
    const observable: Observable<Object> =  this.http.post('https://frozen-escarpment-79594.herokuapp.com/forms', formEntry, options);
    return observable
      .map(this.parseJson)
      .catch(this.handleErrors);
  }

  displayNotification(text: string, duration: number = 3000, style: string = '') {
    Materialize.toast(text, duration, style);
  }

  private parseJson(res: Response): Object {
    const body = res.json();
    return body || {};
  }
  private handleErrors(error: Response|any) {
    return Observable.throw(error.message || error);
  }
}
