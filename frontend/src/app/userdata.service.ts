import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  constructor(private http: HttpClient) { }
  
  baseurl = "http://localhost:3000/";
  addPackageApi(data: any){
    console.log(data);
    return this.http.post(this.baseurl + `addpackage`, data)
  }
  
  searchPackageApi(data: any){
    console.log(data.id);
    return this.http.get(this.baseurl +`selectpackage/${data.id}`);
  }
}
