export const api = {
  posts: async () => {
    const timestamp = new Date().getTime();

    return fetch(`https://docs.google.com/spreadsheets/d/e/2PACX-1vRgc7lbWkLpzlhRSBXIz7d3_yWJIEIzs3UZSPS1keA4COtK4SI-Yn5LK63o-sH2TgRASVD3KwzoNCW0/pub?output=tsv&timestamp=${timestamp}`, {
      cache: "no-store",
      next: { tags: ['posts']}})
    .then((data) => data.text())
      .then((data) => data.split('\n').slice(1).map((row) => {
        const [fecha, titulo, descripcion, imagen, link, categori] = row.split('\t');
        const formattedImage = imagen.replace(/\\/g, '/').trim();
        const categoria = categori.replace(/\s/g, '')

        return {
          fecha,
          titulo,
          descripcion,
          formattedImage,
          link,
          categoria
        }
      }))
      .then((array) => array.reverse())
      .catch(function (error) {
        console.log(error);
      })
  },
  eventos: async () => {
    const timestamp = new Date().getTime();

    return fetch(`https://docs.google.com/spreadsheets/d/e/2PACX-1vSUwUDQMmAw4eYpp4YO5GewN62hHfPDpurDS4Xp7geXUMRS7toyJgmYczED_nhTIVhrRanBpPpQhJav/pub?gid=1137579530&single=true&output=tsv&timestamp=${timestamp}`, {
      cache: "no-store",
      next: { tags: ['eventos']}})
    .then((data) => data.text())
      .then((data) => data.split('\n').slice(1).map((row) => {
        const [fecha, titulo, descripcion, imagen, link, categori] = row.split('\t');
        const formattedImage = imagen.replace(/\\/g, '/').trim();
        const categoria = categori.replace(/\s/g, '')

        return {
          fecha,
          titulo,
          descripcion,
          formattedImage,
          link,
          categoria
        }
      }))
      .then((array) => array.reverse())
      .catch(function (error) {
        console.log(error);
      })
  }
}
