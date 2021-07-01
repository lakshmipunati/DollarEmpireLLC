import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeScanComponent } from '../qrcode/qrcode-scanner.component';
import { CommonAPIService } from '../../shared/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  displayedColumns: string[] = ['no', 'items', 'quantity'];
  dataSource: any = ELEMENT_DATA;
  scannedValues;
  searchValue: string;

  constructor(private _router: Router,
    public dialog: MatDialog,
    private _commonService: CommonAPIService,
    private _toasterService: MatSnackBar,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QrcodeScanComponent, {
      width: '550px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log('The dialog was closed');
      this.scannedValues = result;
    });
  }

  searchData() {
    this._commonService.searchItem(this.searchValue).subscribe((response) => {
      if(response.status == "success"){
        this.dataSource = response.productList;
      }
    })
  }

  saveItem() {
    // this._commonService.getItemsPageData(this.dataSource);
    this._router.navigate(['/additionalnotes', 1]);
    let request = {
      customer_id: this._activateRoute.snapshot.paramMap.get('id'),
      item: this.dataSource
    }
    this._commonService.saveItems(request).subscribe(response => {
      if (response.status == "Success") {
        this._toasterService.open(response.msg);
        this._router.navigate(['/additionalnotes', response.customer_id]);
      } else {
        alert("API Error");
      }
    })

  }

  itemAccepted() {
    debugger
    this.dataSource.push({ no: this.dataSource.length + 1, items: this.scannedValues[0].item_name, quantity: this.scannedValues[0].quantity })
  }

  incrementQuantity(index, selectedObj) {
    this.dataSource[index].quantity = selectedObj.quantity + 1;
  }

  decreaseQuantity(index, selectedObj) {
    this.dataSource[index].quantity = selectedObj.quantity - 1;
  }

  
}

const ELEMENT_DATA = [
  { item_id: 1, item_name: 'Light Bulb', quantity: 1 }
];