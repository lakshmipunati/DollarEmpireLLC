import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationFormModel } from '../../shared/models/identification-detail.model';
import { CommonAPIService } from '../../shared/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './identification-details.html',
  styleUrls: ['./identification-details.css']
})
export class IdentificationDetailComponent implements OnInit {
  identificationForm: FormGroup;

  constructor(
    private _router: Router,
    private _commonService: CommonAPIService,
    private _toasterService: MatSnackBar
  ) { this.buildIdentificationForm(); }

  ngOnInit() {

  }

  buildIdentificationForm() {
    return this.identificationForm = new FormGroup({
      customer_name: new FormControl('', Validators.required),
      cell: new FormControl(),
      phone_number: new FormControl(),
      address: new FormControl()
    })
  }

  submitIdentificationData(identificationFormObj) {
    console.log(identificationFormObj.value);
    debugger
    this._router.navigate(['/items',1]);
    // if (identificationFormObj.valid) {
    //   this._commonService.postCustomerDetails(identificationFormObj.value).subscribe(response => {
    //     if (!response.msg) {
    //       this._toasterService.open(response.msg);
    //       this._router.navigate(['/items', response.customer_id]);
    //     } else {
    //       alert("API Error")
    //     }
    //   })

    // }
  }
}
