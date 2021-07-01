import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ItemsComponent } from './components/itemspage/items.component';
import { IdentificationDetailComponent } from './components/identification-details/identification-details.component';
import { AdditionalDetailComponent } from './components/additional-details/additional-details.component';
import { QrcodeScanComponent } from './components/qrcode/qrcode-scanner.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    AppComponent, ItemsComponent, IdentificationDetailComponent, AdditionalDetailComponent, QrcodeScanComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ZXingScannerModule,

    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [QrcodeScanComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
