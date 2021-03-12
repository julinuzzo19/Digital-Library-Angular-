import { Component, OnInit } from '@angular/core';
import {} from '../../services/LibroService';
import { URL_API_LIBROS } from '../../models/Constants';
import { Libro } from '../../models/Libro';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public libros: Libro[];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.HttpClient.get<any>(URL_API_LIBROS).subscribe((response) => {
      this.libros = response;
      console.log(this.libros);
    });
  }
}
