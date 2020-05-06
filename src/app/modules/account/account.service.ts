import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from 'src/app/core/service/http-service.service';
import { ResultModel } from 'src/app/shared/models/result-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private apiService: HttpServiceService,
  ) { }
  registerUser(data): Observable<ResultModel> {
    return this.apiService.post('api/register', data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  userAuthentication(data): Observable<ResultModel> {
    return this.apiService.post('api/authenticate', data)
      .pipe(map(
        data => {
          console.log("Data login", data);
          return data;
        }
      ));
  }
  forgotPassword(data): Observable<ResultModel> {
    return this.apiService.post('api/forgotpassword', data)
      .pipe(map(
        data => {
          console.log("Data forgotPassword", data);
          return data;
        }
      ));
  }
  resetPassword(data): Observable<ResultModel> {
    return this.apiService.post('api/resetpassword', data)
      .pipe(map(
        data => {
          console.log("Data resetPassword", data);
          return data;
        }
      ));
  }

}
