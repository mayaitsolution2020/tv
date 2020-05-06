import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: Http,) { }


  
  getToken() {
    let data = localStorage.getItem('currentUser');

    if (data != 'undefined' && data != undefined && data != null && data != '') {

      let loginUser = JSON.parse(data);
      return loginUser.access_token;
    }
    return null;
  }



  private setHeaders(includeToken: boolean = true): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    var token = this.getToken();

    if (includeToken && token != null && token != '') {
      headersConfig['Authorization'] = `bearer ${token}`;
    }
    return new Headers(headersConfig);
  }

   private setHeadersForFile(includeToken: boolean = true): Headers {
    const headersConfig = {
      'enctype': 'multipart/form-data',
      'Accept': 'application/json'
    };

    var token = this.getToken();

    if (includeToken && token != null && token != '') {
      headersConfig['Authorization'] = `bearer ${token}`;
    }
    return new Headers(headersConfig);
  }
  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  
  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {

    return this.http.get(`${environment.baseUrl}${path}`, { headers: this.setHeaders(), search: params })
      .pipe(
        catchError(this.formatErrors)
      )
      .pipe(map((res: Response) => res.json()));
  }

  post(path: string, body: Object = {}): Observable<any> {
    
    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .pipe(
        catchError(this.formatErrors)
      )
      .pipe(map((res: Response) => res.json()));
  }


  
  postWithoutHeader(path: string, body: Object = {}): Observable<any> {
    

    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeadersForLogin()}
    )
    .pipe(
      catchError(this.formatErrors))
    .pipe(map((res: Response) => res.json()));
  }

  private setHeadersForLogin(includeToken:boolean=true): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);
  }


  put(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .pipe(
        catchError(this.formatErrors)
      )
      .pipe(map((res: Response) => res.json()));
  }
  postFormDataWithHeader(path: string, body: any, extraheader: boolean = false): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`,
      body,
      { headers: this.setHeadersForFile() }
    )
      .pipe(catchError(this.formatErrors)
      )
      .pipe(map((res: Response) => res.json()));
  }
  //  delete(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
  //   return this.http.post(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
  //     .pipe(catchError(this.formatErrors)
  //     )
  //     .map((res: Response) => res.json()));
  // }
  
  delete(path: string, body: Object = {}): Observable<any> {
    
    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .pipe(
        catchError(this.formatErrors)
      )
      .pipe(map((res: Response) => res.json()));
  }
 
}
