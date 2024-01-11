import axios from 'axios';

export const api = {
  posts: async () => {
    return axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSI1BFJ6EWLww5wkc_FqJf4ss2icZv_g92KkCZTs6YdeyJcH2s2N-ayiDimUW9zCWx5vBmSl69i3k2R/pub?output=tsv')
      .then((res) => res.data.split('\n').slice(1).map((row) => {
        const [fecha, titulo, subtitulo, descripcion, link, imagen] = row.split('\t')

        return {
          fecha,
          titulo,
          subtitulo,
          descripcion,
          link,
          imagen
        }
      }))
      .catch(function (error) {
        console.log(error);
      })
  }
}

