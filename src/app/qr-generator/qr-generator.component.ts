import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css'],
})

export class QrGeneratorComponent {
  public qrData: string = '';
  public isQrGenerated = false;
  constructor() {}

  submit(qrFormData: NgForm) {
    this.qrData = qrFormData.value['qrdata'];
    this.isQrGenerated = true;
  }

  clearQRCode(){
    this.qrData = '';
    this.isQrGenerated = false;
  }

  downloadQRPdf() {
    let node = document.getElementById('generated-qr-code');
    if (node != null) {
      // html2pdf().from(node).save('quick-response-code.pdf');
    } else {
      alert('No qr genrated');
    }
  }

  downloadQRImage() {
    let node = document.getElementById('generated-qr-code');
    if (node != null) {
      htmlToImage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'quick-response-code.jpeg';
        link.href = dataUrl;
        link.click();
      });
    } else {
      alert('No qr generated');
    }
  }
}
