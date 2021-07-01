import { Component, OnInit } from '@angular/core';
import { CommonAPIService } from '../../shared/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './additional-details.html',
  styleUrls: ['./additional-details.css']
})
export class AdditionalDetailComponent implements OnInit {

  additionalNotes: string;
  constructor(private _commonService: CommonAPIService,
    private _toaster: MatSnackBar,
    private _activateRoute: ActivatedRoute) {

  }
  ngOnInit() {

  }

  placeOrder() {
    let request = {
      id: this._activateRoute.snapshot.paramMap.get('id'),
      additional_note: this.additionalNotes
    }
    this._commonService.placeOrderDetails(request).subscribe(response => {
      console.log(response);
      if(response.status == "success")
      this._toaster.open(response.msg);
    })
  }

}
