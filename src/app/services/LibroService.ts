import * as Constants from '../models/Constants';


export async function getlibrosbyinput(tituloautor, check) {
  let regex = /\w[tituloautor]+/;
  let libros = [];

  var URL_GET = Constants.URL_API_LIBROS;

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
