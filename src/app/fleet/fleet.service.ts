import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(public _http: HttpClient) { }

  public uploadUrl(key): Observable<any> {
    //let url = 'http://ec2-52-10-124-187.us-west-2.compute.amazonaws.com:8000/price_detect?file_name=url.jpg&file_path=' + key + '&&download_type=url';
    let url = 'https://branddetection.herokuapp.com/price_detect?file_name=url.jpg&file_path=' + key + '&&download_type=url';

    return this._http.get(url).pipe(
      map(response => {
        return response
      })
    )
  }

  public uploadImage(key): Observable<any> {
    //https://branddetection.herokuapp.com/price_detect?file_name=test1.jpg&file_path=aasd-input-bucket-v1&download_type=s3
    //   let url = 'http://ec2-52-10-124-187.us-west-2.compute.amazonaws.com:8000/price_detect?file_name=' + key + '&file_path=aasid-input-buket-v1&&download_type=s3'

    // let url = 'https://branddetection.herokuapp.com/price_detect?file_name=test1.jpg&file_path=aasd-input-bucket-v1&download_type=s3'
    let url = 'https://branddetection.herokuapp.com/price_detect?file_name=' + key + '&file_path=aasd-input-bucket-v1&download_type=s3';
    // let url = 'http://ec2-52-10-124-187.us-west-2.compute.amazonaws.com:8000/price_detect?file_name=' + key + '&Bucket_name=aasid-input-buket-v1';
    return this._http.get(url).pipe(
      map(response => {
        return response;
      })
    )
  }

  public getHtml(): Observable<any> {
    return this._http.get('/assets/test.txt', { responseType: 'text' }).pipe(
      map(response => {
        // console.log('response', response);
        return response;
      })
    )
  }
}
