const discoteca = [
  {
    artista: "Mareux",
    discos: ["predestiny", "loves from the past"],
  },
  {
    artista: "The Smiths",
    discos: ["Louther Than Bombs", "The Smiths", "The Queen is Die"],
  },
  {
    artista: "Nine Inch Nails",
    discos: ["Pretty Hate Machine", "The Fragile"],
  },
  {
    artista: "Lady Gaga",
    discos: ["Born This Way", "The Fame Monster", "Mayhem"],
  },
  {
    artista: "French Police",
    discos: ["Hautend Castle", "Bleu"],
  },
  {
    artista: "Crystal Catles",
    discos: ["(II)", "(III)"],
  },
];

const lojaDeDiscos = discoteca.map((item, index, array) => {
  return {
    artista: item.artista,
    quantidadeDeDiscos: item.discos.length,
    posicao: index + 1,
    totalDeArtistas: array.length,
    ultimo: index === array.length - 1,
  };
});

console.log(lojaDeDiscos);
