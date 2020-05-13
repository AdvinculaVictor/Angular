import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  posts=[];
  constructor(private datosService: DatosService ) {
    this.datosService.getDatos().subscribe(data => {
      this.posts = data;
    });
   }

  ngOnInit(): void {
  }

}
