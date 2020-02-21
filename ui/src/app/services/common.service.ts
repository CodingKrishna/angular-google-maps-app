import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

    constructor(private http: HttpClient){}

    getCountryList() {
        return this.http.get("http://localhost:4300/api/countries");
    }
}