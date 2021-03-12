import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAlquiler } from '../../services/AlquilerService';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    getAlquiler(1);
  }
}
