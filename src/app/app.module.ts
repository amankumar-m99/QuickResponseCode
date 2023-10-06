import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';

import { QrcodeComponent } from './qrcode/qrcode.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScannerComponent } from './scanner/scanner.component';
import { GeneratorComponent } from './generator/generator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QrPlaceholderComponent } from './qr-placeholder/qr-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    NavbarComponent,
    ScannerComponent,
    GeneratorComponent,
    HomePageComponent,
    QrPlaceholderComponent
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
