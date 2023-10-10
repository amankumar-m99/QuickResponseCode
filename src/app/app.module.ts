import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent,
    HomepageComponent,
    NavbarComponent,
    QrcodeComponent,
    QrScannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
