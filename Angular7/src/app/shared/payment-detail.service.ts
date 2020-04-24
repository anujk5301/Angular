import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'https://localhost:44337/api';
  list : PaymentDetail[];

  constructor(private http: Http) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetails', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetails/'+ this.formData.pmId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetails/'+ id);
  }

  refreshList(){
    // this.http.get(this.rootURL + '/PaymentDetail')
    // .toPromise()
    // .then(res => this.list = res as PaymentDetail[]);

    this.http.get(this.rootURL+'/PaymentDetails').subscribe(values=>{this.list=values.json() as PaymentDetail[]}); 



  }
}
