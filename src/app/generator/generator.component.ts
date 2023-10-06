import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  public qrData:string="";
  public isQrGenerated=false;
  constructor(){}

  submit(qrFormData:NgForm){
    console.log(qrFormData.value);
    this.qrData = qrFormData.value["qrdata"];
    console.log(this.qrData);
    this.isQrGenerated = true;
  }
}
