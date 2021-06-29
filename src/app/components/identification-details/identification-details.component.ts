import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationFormModel } from '../../shared/models/identification-detail.model';
import { IdentificationDetailService } from '../../shared/services/identification-details.service';

@Component({
  templateUrl: './identification-details.html',
  styleUrls: ['./identification-details.css']
})
export class IdentificationDetailComponent implements OnInit {
  identificationForm: FormGroup;

  constructor(
    private _router: Router,
    private _identificationService: IdentificationDetailService
  ) { this.buildIdentificationForm(); }

  ngOnInit() {

  }

  buildIdentificationForm() {
    return this.identificationForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      cell: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    })
  }

  submitIdentificationData(identificationFormObj) {
    console.log(identificationFormObj.value);
    this._router.navigate(['/items']);
    
    // if (identificationFormObj.valid) {
    //   this._identificationService.postIdentificationFormDetails(identificationFormObj.value).subscribe(response => {
    //     if (response) {
    //       this._router.navigate(['/items']);
    //     } else {
    //       alert("API Error")
    //     }
    //   })

    // }
  }
}
