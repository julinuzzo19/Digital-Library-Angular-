import * as constants from '../models/Constants';
import { Alquiler } from '../models/Alquiler';

export function PostAlquiler(alquilerjson) {
  fetch(constants.URL_API_ALQUILERES, {
    method: 'POST',
    body: alquilerjson,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

export function getAlquiler(clienteid) {
  fetch(constants.URL_API_ALQUILERES_CLIENTES + clienteid, {})
    .then((response) => response.json())
    .then((data) => {
      MostrarAlquileres(data);
    });
}

export function MostrarAlquileres(lista) {
  for (let i of lista) {
    if (i.fechaReserva == '') {
      const place = document.getElementById('articles-alquileres');
      const element = document.createElement('div');
      var fila = i;

      var fechaalquiler = fila.fechaAlquiler.substring(0, 9);
      var fechadevolucion = fila.fechaDevolucion.substring(0, 9);

      element.innerHTML = `                                     
     <div class="row">
     <div class="col-6">
      <article class="article-item-order">
     <div class="image-space"> <img class="image-libro" src="${i.imagen}" alt=""></div>
      <h2>${i.titulo}</h2>
      <h3>${i.autor}</h3>
      <h5>Fecha de alquiler: ${fechaalquiler}</h5>
      <h5>Fecha de devolución: ${fechadevolucion}</h5>
      </articles> 
      </div>
      </div>
        `;

      if (place != null) {
        place.appendChild(element);
      }
    } else {
      const place = document.getElementById('articles-reservas');
      const element = document.createElement('div');
      var fila = i;
      var fechareserva = fila.fechaReserva.substring(0, 9);

      element.innerHTML = ` 
      <div class="row">
      <div class="col-6">                                    
      <article class="article-item-order">
      <div class="image-space"> <img class="image-libro" src="${i.imagen}" alt=""></div>
      <h2>${i.titulo}</h2>
      <h3>${i.autor}</h3>
      <h5> Fecha de reserva: ${fechareserva}</h5>
      </articles>  
      </div> 
      </div>
            `;
      if (place != null) {
        place.appendChild(element);
      }
    }
  }
}

export var alquilarLibro = function (isbn) {
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1;
  var año = fechaActual.getFullYear();

  var fechaAlquiler: string = dia + '/' + mes + '/' + año;

  var alquiler = new Alquiler(1, isbn, '', fechaAlquiler);
  var alquilerjson = JSON.stringify(alquiler);

  PostAlquiler(alquilerjson);
};

export var reservarLibro = function (isbn) {
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1;
  var año = fechaActual.getFullYear();

  var fechaReserva: string = dia + '/' + mes + '/' + año;

  var reserva = new Alquiler(1, isbn, fechaReserva, '');
  var reservajson = JSON.stringify(reserva);

  PostAlquiler(reservajson);
};
