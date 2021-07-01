import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class CommonAPIService {

    readonly baseURL = 'http://127.0.0.1:8000/api';
    itemPageSource = new BehaviorSubject('');
    curentMsg = this.itemPageSource.asObservable();
    constructor(private _httpClient: HttpClient) {

    }

    postCustomerDetails(request): Observable<any> {
        return this._httpClient.post(this.baseURL + "/customer", request);
    }

    searchItem(itemId): Observable<any> {
        return this._httpClient.get(this.baseURL + '/product/' + itemId);
    }

    scanBarcodeData(scanData): Observable<any> {
        return this._httpClient.get(this.baseURL + '/productScan/' + scanData);
    }
    
    saveItems(request): Observable<any> {
        return this._httpClient.post(this.baseURL + '/saveItems', request);
    }
    
    placeOrderDetails(request): Observable<any> {
        return this._httpClient.post(this.baseURL + '/sendMail', request);
    }

    getItemsPageData(itemObj) {
        debugger
        this.itemPageSource.next(itemObj);
        //return;
    }

}