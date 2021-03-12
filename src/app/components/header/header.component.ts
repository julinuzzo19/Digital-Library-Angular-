import { Component, OnInit } from '@angular/core';
import {getCliente} from '../../services/ClienteService'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    getCliente(1);
  }

  

}
