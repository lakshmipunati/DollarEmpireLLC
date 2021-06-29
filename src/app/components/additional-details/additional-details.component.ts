import { Component, OnInit } from '@angular/core';
import { IdentificationDetailService } from '../../shared/services/identification-details.service';

@Component({
  templateUrl: './additional-details.html',
  styleUrls: ['./additional-details.css']
})
export class AdditionalDetailComponent implements OnInit {

  additionalNotes: string;
  constructor(private _identificationService: IdentificationDetailService) {

  }
  ngOnInit() {

  }

  placeOrder() {
    this._identificationService.placeOrderDetails(this.additionalNotes).subscribe(response => {
      console.log(response);
    })
  }
  
}
