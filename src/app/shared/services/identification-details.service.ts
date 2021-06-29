import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class IdentificationDetailService {
    readonly baseURL = '';
    itemPageSource = new BehaviorSubject('');
    curentMsg = this.itemPageSource.asObservable();
    constructor(private _httpClient: HttpClient) {

    }

    postIdentificationFormDetails(request): Observable<any> {
        return this._httpClient.post(this.baseURL , request)
    }

    searchItem(): Observable<any> {
        return this._httpClient.get(this.baseURL + '/items')
    }

    placeOrderDetails(request): Observable<any> {
        return this._httpClient.post(this.baseURL, request);
    }

    getItemsPageData(itemObj) {
        debugger
        this.itemPageSource.next(itemObj);
        //return;
    }

}