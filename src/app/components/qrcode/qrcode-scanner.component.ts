import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';
import {BehaviorSubject} from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({selector: 'qrcode-scanner', templateUrl: './qrcode-scanner.html', styleUrls: ['./qrcode-scanner.css']})

export class QrcodeScanComponent implements OnInit { /**
     * Device used to scan the QR code (front/back camera)
     */
    public currentDevice?: MediaDeviceInfo;

    /**
     * Camera initialization observable
     */
    public initCamera$ : BehaviorSubject < {
        success: boolean;
        error: string | null
    } > = new BehaviorSubject<{ success: boolean; error: string | null }>({success: false, error: null});

    /**
     * Stream initialized (video/audio)
     */
    public mediaStream?: MediaStream;

    @ViewChild('scanner', {static: false})
    scanner : ZXingScannerComponent;

    scannedValue : any;
    constructor(
        public dialogRef: MatDialogRef<QrcodeScanComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {}) {}
    

    public ngOnInit() { // Run on component initialization
this.openScanner();
    }

    public tryAgainQrCodeScan() {
        this.checkCameraPermissions();
    }

    /**
     * Check if user has permissions to access camera from device.
     * If yes, try to access back camera by default.
     */
    public checkCameraPermissions() {
       // debugger
        navigator.mediaDevices.getUserMedia({video: true}).then((stream : MediaStream) => {
            this.mediaStream = stream;
            this.initCamera$.next({success: true, error: null});
            if (this.scanner) {
                this.scanner.camerasFound.subscribe((devices : MediaDeviceInfo[]) => {
                    if (devices.length > 1) { // Set default camera to back camera
                        const defaultCamera = devices.filter((device : MediaDeviceInfo) => device.label.toLocaleLowerCase().indexOf('front') > -1);
                        if (defaultCamera) {
                            this.currentDevice = defaultCamera[0];
                        } else {
                            this.currentDevice = devices[0];
                        }
                    }
                });
            }
        }).catch((err : MediaStreamError) => {
            this.initCamera$.next({success: false, error: err.message});
        });
    }

    handleQrCodeResult(event) {
        debugger
        this.scannedValue = event;
        this.dialogRef.close(this.scannedValue);
       // this.initCamera$.next({success: false, error: ''});
    }

    cancelQrCodeScan() {
        this.initCamera$.next({success: false, error: ''});
    }

    openScanner() {
        this.checkCameraPermissions();
    }


}
