const animes = [
  { nome: "Neon Genesis Evangelion", nota: 100 },
  { nome: "One Piece", nota: 35 },
  { nome: "Elfen Lied", nota: 83 },
  { nome: "Kaiba", nota: 100 },
  { nome: "Claymore", nota: 81 },
  { nome: "Paranoia Agent", nota: 94 },
  { nome: "Serial Experiments Lain", nota: 100 },
  { nome: "Fullmetal Alchemist", nota: 50 },
  { nome: "Gantz", nota: 60 },
];

const notas = {
  pessimo: 20,
  ruim: 40,
  regular: 60,
  bom: 80,
  otimo: 100,
};

const filterAnimes = animes.filter(function (anime, index, array) {
  if (index !== 0 && index !== array.length - 1) {
    if (anime.nota >= this.bom) {
      if (anime.nota < array[index + 1].nota) {
        if (anime.nota > array[index - 1].nota) {
          return true;
        }
        return false;
      }
    } else {
      if (anime.nota > array[index - 1].nota) {
        return true;
      }
      return false;
    }
    return true;
  }
  return anime.nota >= this.bom;
}, notas);

console.log(filterAnimes);
