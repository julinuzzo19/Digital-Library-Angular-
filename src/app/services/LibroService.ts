import {URL_API_LIBROS} from '../models/Constants';
import {Libro} from '../models/Libro';

export async function getLibrosByInput(tituloautor, check) {
  let regex = /\w[tituloautor]+/;
    var libros:any[]=[];

  var URL_GET = URL_API_LIBROS;

  if (check == 'titulo') {
    URL_GET = URL_GET + `?titulo=${tituloautor}`;
  } else {
    URL_GET = URL_GET + `?autor=${tituloautor}`;
  }

  await fetch(URL_GET)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.titulo) || regex.test(i.autor)) {
          libros.push(i);
        }
      }
    });

  return libros;
}
