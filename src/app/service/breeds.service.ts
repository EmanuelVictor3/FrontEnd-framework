import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private baseUrl =
  'https://api.thedogapi.com/v1/breeds?limit=100&api_key=live_v8X1JcyWyXRdxJRCVlDa1FvQwg1O9VmJOBwlJlT46UnNT3Ub8pgDmXbtpybAIxXg';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
