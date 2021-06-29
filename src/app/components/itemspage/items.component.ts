import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeScanComponent } from '../qrcode/qrcode-scanner.component';
import { IdentificationDetailService } from '../../shared/services/identification-details.service';

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

  constructor(private _router: Router,
    public dialog: MatDialog,
    private _identificationService: IdentificationDetailService) { }

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
    this._identificationService.searchItem().subscribe((response) => {
      console.log(response)
    })
  }

  navigateToadditionalDetails() {
    this._identificationService.getItemsPageData(this.dataSource);
    this._router.navigate(['/additionalnotes'])
  }

  itemAccepted() {
    debugger
    this.dataSource.push({ no: this.dataSource.length + 1, items: this.scannedValues, quantity: 1 })
  }

  incrementQuantity(index, selectedObj) {
    this.dataSource[index].quantity = selectedObj.quantity + 1;
  }

  decreaseQuantity(index, selectedObj) {
    this.dataSource[index].quantity = selectedObj.quantity - 1;
  }




}

const ELEMENT_DATA = [
  { no: 1, items: 'Light Bulb', quantity: 1 }
];