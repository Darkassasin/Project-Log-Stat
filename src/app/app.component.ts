import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<embed-obj [objSrc]="urlVal"></embed-obj>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    urlVal="http://192.168.50.138:8080/doi/service/v1/application/get-temp-uploads?fileName=c8b59a645b0e19920edd0208c4d0c8b099aee0419837e51ac76a1bb2e06038c6.pdf";
}
