import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from 'src/app/core/service/http-service.service';
import { ResultModel } from 'src/app/shared/models/result-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    private apiService: HttpServiceService,
  ) { }

  getClassesMeetings(): Observable<ResultModel> {
    return this.apiService.get(`api/travis/GetClassesMeetings`)
      .pipe(map(
        data => {
          console.log('Classes data', data);
          return data;

        }
      ));
  }
  getOtherClasses(meetingId): Observable<ResultModel> {
    console.log('getOtherClasses service', meetingId);
    return this.apiService.get(`api/travis/GetClassesMeetingsById/${meetingId}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getAllProductCategory(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllProductCategory`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }
  getProductInfo(id): Observable<ResultModel> {
    console.log('getOtherClasses service', id);
    return this.apiService.get(`api/travis/GetProductInfo/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getAllProducts(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllProduct/`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }


  getProductData(name): Observable<ResultModel> {
    console.log('getOtherClasses service', name);
    return this.apiService.get(`api/travis/GetProductInfoByName/${name}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getAffiliateData(name): Observable<ResultModel> {
    console.log('getOtherClasses service', name);
    return this.apiService.get(`api/admin/GetPinkAffiliateByName/${name}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  getTransformationData(name): Observable<ResultModel> {
    console.log('getOtherClasses service', name);
    return this.apiService.get(`api/admin/GetTransformationByName/${name}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getTestimonieData(name): Observable<ResultModel> {
    console.log('getOtherClasses service', name);
    return this.apiService.get(`api/admin/GetTestimonieByName/${name}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getProductById(id): Observable<ResultModel> {
    return this.apiService.get(`api/travis/GetProductDetailById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  getAllTransformations(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllTransformation`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getTransformationById(id): Observable<ResultModel> {
    console.log('getOtherClasses service', id);
    return this.apiService.get(`api/admin/GetTransformationById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }


  getAllTestimonies(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllTestimonie`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getTestimonieById(id): Observable<ResultModel> {
    console.log('getOtherClasses service', id);
    return this.apiService.get(`api/admin/GetTestimonieById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  getAllPinkAffiliates(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllPinkAfflicates`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getAllQuotes(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllQuotes`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }
  getQuotes(id): Observable<ResultModel> {
    console.log('get quotes service', id);
    return this.apiService.get(`api/admin/GetAllQuotesByCategory/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  getPinkAffiliateById(id): Observable<ResultModel> {
    console.log('getOtherClasses service', id);
    return this.apiService.get(`api/admin/GetPinkAffiliateById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  getAllQuotesCategory(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllQuotesCategory`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }
  getQuoteDetailByID(id): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllQuotesById/${id}`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getNewPodcasts(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllPodcast`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getWeFixedItVideos(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetWeFixedItVideo`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }

  getMotivationVideos(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetMotivationVideo`)
      .pipe(map(
        data => {
          return data;

        }
      ));
  }
  getVideoByID(id): Observable<ResultModel> {
    console.log('getVideoByID on service', id);
    return this.apiService.get(`api/admin/GetvideoById/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  // getAllPodcasts(): Observable<ResultModel> {
  //   const endpoint = 'https://www.myshibboleth.com/portal/api/v1/podcast/?format=json';
  //   return this.apiService.getPodcast(endpoint)
  //     .pipe(map(
  //       data => {
  //            console.log('Podcaasst data on service', data);
  //         return data;
  //       }
  //     ));
  // }
  // getAllVideos(): Observable<ResultModel> {
  //   const endpoint = 'https://www.myshibboleth.com/portal/api/v1/publiclevel/77/?format=json';
  //   return this.apiService.post(endpoint)
  //     .pipe(map(
  //       data => {
  //            console.log('Video data on service', data);
  //         return data;
  //       }
  //     ));
  // }
}
