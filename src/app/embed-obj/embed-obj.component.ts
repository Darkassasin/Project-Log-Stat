import { Component, Input } from '@angular/core';

@Component({
  selector: 'embed-obj',
  template: `
  <pdf-viewer [src]="objSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})
export class EmbedobjComponent{
  @Input() objSrc:string;
  
  // pdfSrc="http://192.168.50.138:8080/doi/service/v1/application/get-temp-uploads?fileName=c8b59a645b0e19920edd0208c4d0c8b099aee0419837e51ac76a1bb2e06038c6.pdf";
}
