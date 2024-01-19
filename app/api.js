

export const api = {
  posts: async () => {
    const timestamp = new Date().getTime();
    return fetch(`https://docs.google.com/spreadsheets/d/e/2PACX-1vRgc7lbWkLpzlhRSBXIz7d3_yWJIEIzs3UZSPS1keA4COtK4SI-Yn5LK63o-sH2TgRASVD3KwzoNCW0/pub?output=tsv&timestamp=${timestamp}`,
    { next: { tags: ["posts"]} })
    .then((jiji) => jiji.text())
      .then((data) => data.split('\n').slice(1).map((row) => {
        console.log(row)
        const [fecha, titulo, descripcion, link, imagen] = row.split('\t')
        const formattedImagen = imagen.replace(/\\/g, '/').trim();

        return {
          fecha,
          titulo,
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

