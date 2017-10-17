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
  
  // pdfSrc="http://103.69.124.122:8080/doi/service/v1/application/get-temp-uploads?fileName=d91319bf3a27d9337c10036b32afb09ea840bd0845267befa6191356479c45d1.pdf";
}
