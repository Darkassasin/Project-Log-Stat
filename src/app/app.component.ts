import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<embed-obj [objSrc]="urlVal"></embed-obj>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    urlVal="http://103.69.124.122:8080/doi/service/v1/application/get-temp-uploads?fileName=d91319bf3a27d9337c10036b32afb09ea840bd0845267befa6191356479c45d1.pdf";
}
