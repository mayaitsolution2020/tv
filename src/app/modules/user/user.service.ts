import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from 'src/app/core/service/http-service.service';
import { ResultModel } from 'src/app/shared/models/result-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: HttpServiceService,
  ) { }

  getChallenge(): Observable<ResultModel> {
    return this.apiService.get(`api/GetAllChallenges`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  postImage(fileToUpload: File): Observable<ResultModel> {
    const endpoint = 'api/MediaUpload';

    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);

    return this.apiService.postFormDataWithHeader(endpoint, formData)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getAllMeals(): Observable<ResultModel> {
    return this.apiService.get(`api/GetAllUserMeal`)
      .pipe(map(
        data => {
          console.log('getAllMeals', data);
          return data;
        }
      ));
  }
  deleteMeals(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteUserMeal/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  loadMeals(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/GetUserMealsById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));

  }
  submitMeals(data): Observable<ResultModel> {
    return this.apiService.post('api/InsertUserMeal', data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateUserMeal(data): Observable<ResultModel> {
    return this.apiService.post(`api/UpdateUserMeal`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

}
