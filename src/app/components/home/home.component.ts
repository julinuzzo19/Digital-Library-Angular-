import { Component, OnInit } from '@angular/core';
import {getLibrosByInput} from '../../services/LibroService';
import { URL_API_LIBROS } from '../../models/Constants';
import { Libro } from '../../models/Libro';
import { HttpClient } from '@angular/common/http';
import {alquilarLibro,reservarLibro} from '../../services/AlquilerService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public libros: Libro[];
  public form:any;
  public lista:any;

  constructor(private HttpClient: HttpClient) {

    this.form={
      busqueda:'',
      autor:'',
      titulo:''
    }

  }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.HttpClient.get<any>(URL_API_LIBROS).subscribe((response) => {
      this.libros = response;
    });
  }

  alquilar(isbn:string)
  {
    alquilarLibro(isbn);
  }

  reservar(isbn:string)
  {
    reservarLibro(isbn);

  }

  async onSubmit()
  { 
    
    
    if (this.form.busqueda!='' && this.form.autor!='') {
     this.libros= await getLibrosByInput(this.form.busqueda,this.form.autor);
     this.form.autor=''; 
    }
    else {
      this.libros= await getLibrosByInput(this.form.busqueda,this.form.titulo); 
      this.form.titulo=''; 
    }
    
   
  }



}
