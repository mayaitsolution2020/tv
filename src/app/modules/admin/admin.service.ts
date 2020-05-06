import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from 'src/app/core/service/http-service.service';
import { ResultModel } from 'src/app/shared/models/result-model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    private apiService: HttpServiceService,
  ) { }
  getAllProductCategory(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllProductCategory`)
      .pipe(map(
        data => {
          console.log('getallproductcategory service', data);
          return data;
        }
      ));
  }
  getAllQuotesCategory(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllQuotesCategory/`)
      .pipe(map(
        data => {
          console.log('getAllQuotesCategory service', data);
          return data;
        }
      ));
  }
  getAllClass(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllClassList`)
      .pipe(map(
        data => {
          console.log('getallclass', data);
          return data;
        }
      ));
  }
  getAllProduct(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllProduct`)
      .pipe(map(
        data => {
          console.log('getallproduct', data);
          return data;
        }
      ));
  }
  getAllProductCategories(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllProductCategory`)
      .pipe(map(
        data => {
          console.log('getallproduct', data);
          return data;
        }
      ));
  }
  getAllShibbolethWalls(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllShibbolethWall`)
      .pipe(map(
        data => {
          console.log('getallshibbolethwalls', data);
          return data;
        }
      ));
  }
  getAllTestimonie(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllTestimonie`)
      .pipe(map(
        data => {
          console.log('getallTestimonie', data);
          return data;
        }
      ));
  }

  getAllTransformation(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllTransformation`)
      .pipe(map(
        data => {
          console.log('getAllTransformation', data);
          return data;
        }
      ));
  }
  getAllPost(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllTransformationPost`)
      .pipe(map(
        data => {
          console.log('getAllPost', data);
          return data;
        }
      ));
  }
  getAllUser(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllUser`)
      .pipe(map(
        data => {
          console.log('getAllTransformation', data);
          return data;
        }
      ));
  }
  getAllQuotes(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllQuotes`)
      .pipe(map(
        data => {
          console.log('GetAllQuotes', data);
          return data;
        }
      ));
  }
  getAllPinkAfflicate(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllPinkAfflicates`)
      .pipe(map(
        data => {
          console.log('getAllPinkAfflicate', data);
          return data;
        }
      ));
  }
  getAllPodcast(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetAllPodcast/`)
      .pipe(map(
        data => {
          console.log('getAllPodcast', data);
          return data;
        }
      ));
  }

  getAllVideo(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetWeFixedItVideo/`)
      .pipe(map(
        data => {
          console.log('getAllVideo', data);
          return data;
        }
      ));
  }
  getMotivationVideo(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetMotivationVideo/`)
      .pipe(map(
        data => {
          console.log('getMotivationVideo', data);
          return data;
        }
      ));
  }
  getMotivationMusic(): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetMotivationMusic/`)
      .pipe(map(
        data => {
          console.log('getMotivationMusic', data);
          return data;
        }
      ));
  }

  getAllChallenges(): Observable<ResultModel> {
    return this.apiService.get(`api/GetAllChallenges/`)
      .pipe(map(
        data => {
          console.log('getAllChallanges', data);
          return data;
        }
      ));
  }

  submitChallenges(data): Observable<ResultModel> {
    return this.apiService.post('api/InsertChallenges/', data)
      .pipe(map(
        data => {
          console.log('InsertChallenges', data);
          return data;
        }
      ));
  }
  submitPodCast(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/Insertpodcast/', data)
      .pipe(map(
        data => {
          console.log('InsertPodcast', data);
          return data;
        }
      ));
  }
  submitVideo(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/Insertvideo/', data)
      .pipe(map(
        data => {
          console.log('InsertProduct', data);
          return data;
        }
      ));
  }
  submitProductCat(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertProductCategory', data)
      .pipe(map(
        data => {
          console.log('InsertProduct', data);
          return data;
        }
      ));
  }
  submitShibboleth(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertShibbolethWalls', data)
      .pipe(map(
        data => {
          console.log('Shibboleth', data);
          return data;
        }
      ));
  }
  submitPinkAfflicates(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertPinkAfflicates', data)
      .pipe(map(
        data => {
          console.log('Shibboleth service', data);
          return data;
        }
      ));
  }
  submitQuote(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertQuote', data)
      .pipe(map(
        data => {
          console.log('Shibboleth service', data);
          return data;
        }
      ));
  }
  submitClass(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertClassesMeetings', data)
      .pipe(map(
        data => {
          console.log('Class Meeting service', data);
          return data;
        }
      ));
  }
  submitTransformation(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertTransformation', data)
      .pipe(map(
        data => {
          console.log('Class Meeting service', data);
          return data;
        }
      ));
  }
  submitTransformationPost(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertTransformationPost', data)
      .pipe(map(
        data => {
          console.log('Class Meeting service', data);
          return data;
        }
      ));
  }
  submitTestimonie(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertTestimonie', data)
      .pipe(map(
        data => {
          console.log('Class Meeting service', data);
          return data;
        }
      ));
  }
  submitProductInfo(data): Observable<ResultModel> {
    return this.apiService.post('api/admin/InsertProduct', data)
      .pipe(map(
        data => {
          console.log('Class Meeting service', data);
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
  loadChallanges(id): Observable<ResultModel> {

    return this.apiService.get(`api/GetChallengesById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadChallenges', data);
          return data;
        }
      ));

  }
  loadProductInfo(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetProductCategoryById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadPodcast(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/podcastById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadVideo(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetvideoById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadShibboleth(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetShibbolethWallsById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadProduct(id): Observable<ResultModel> {
    console.log('ProductID', id)
    return this.apiService.get(`api/admin/GetProductById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadClassInfo(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetClassesMeetingById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadUserInfo(id): Observable<ResultModel> {

    return this.apiService.get(`api/admin/GetUserById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadTransformation(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetTransformationById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadPost(id): Observable<ResultModel> {
    return this.apiService.get(`api/admin/GetTransformationPostById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadTestimonie(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetTestimonieById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadQuotes(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetAllQuotesById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  loadPinkAffiliate(id): Observable<ResultModel> {
    console.log('studentID', id)
    return this.apiService.get(`api/admin/GetPinkAffiliateById/${id}`)
      .pipe(map(
        data => {
          console.log('LoadInfo', data);
          return data;
        }
      ));

  }
  updateChallenges(data): Observable<ResultModel> {
    return this.apiService.post(`api/UpdateChallenges/`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  updateProductCat(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateProductCategory`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  updateClassInfo(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateClassesMeetings`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateUser(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateUser`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updatePodcast(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/Updatepodcast`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateVideo(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/Updatevideo`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateProductInfo(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateProduct`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateShibboleth(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateShibbolethWalls`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateTransformation(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateTransformation`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateTransformationPost(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateTransformationPost`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateTestimonie(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateTestimonie`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updateQuotes(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdateQuotes`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  updatePinkAfflicate(data): Observable<ResultModel> {
    return this.apiService.post(`api/admin/UpdatePinkAfflicate`, data)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  delete(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/admin/DeleteProductCategory/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteChallenges(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteChallenges/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteProductInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteProduct/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deletepodcastInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/admin/Deletepodcast/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deletevideoInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/admin/Deletevideo/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteTransformationInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteTransformation/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deletePost(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteTransformationpost/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteUser(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/admin/Deleteuser/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteTestimonieInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteTestimonie/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteQuotesInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteQuotes/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deletePinkAfflicateInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeletePinkAffiliate/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteShibbolethWallsInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteShibbolethWalls/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
  deleteClassInfo(id): Observable<ResultModel> {
    console.log('ID', id)
    return this.apiService.delete(`api/DeleteClassMeeting/${id}`)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }


  // submitProductImage(fileToUpload: File, data): Observable<ResultModel> {
  //   const endpoint = 'api/admin/InsertProduct';
  //   const formData: FormData = new FormData();
  //   formData.append('ProductImage', fileToUpload, fileToUpload.name);
  //   formData.append('CategoryName', data.CategoryName);
  //   formData.append('ProductTitle', data.ProductTitle);
  //   formData.append('ProductDescription', data.ProductDescription);
  //   formData.append('DownloadURL', data.DownloadURL);

  //   console.log('data Final',formData);
  //   return this.apiService.postFormDataWithHeader(endpoint, formData)
  //     .pipe(map(
  //       data => {
  //         console.log('InsertProduct service', data);
  //         return data;
  //       }
  //     );
  // }

}