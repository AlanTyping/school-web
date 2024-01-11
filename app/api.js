import axios from 'axios';

export const api = {
  posts: async () => {
    return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRgc7lbWkLpzlhRSBXIz7d3_yWJIEIzs3UZSPS1keA4COtK4SI-Yn5LK63o-sH2TgRASVD3KwzoNCW0/pub?output=tsv')
      .then((res) => res.data.split('\n').slice(1).map((row) => {
        
        const [fecha, titulo, subtitulo, descripcion, link, imagen] = row.split('\t')
        const formattedImagen = imagen.replace(/\\/g, '/').trim();

        return {
          fecha,
          titulo,
          subtitulo,
          descripcion,
          link,
          formattedImagen
        }
      }))
      .catch(function (error) {
        console.log(error);
      })
  }
}

