import { Component } from '@angular/core';
import { DatosService } from './datos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';
  posts = [];
  constructor(private datosService: DatosService){
    datosService.getDatos().subscribe(data => {
      this.posts = data;
    });
  }
}
