const pratos = [
  {
    nome: "Escondidinho",
    ingredientes: ["carne", "batata", "leite", "queijo", "alho", "cebola"],
  },
  {
    nome: "Macarronada",
    ingredientes: ["farinha", "ovo", "tomate", "água", "alho"],
  },
  {
    nome: "Virado a paulista",
    ingredientes: ["arroz", "feijão", "carne", "ovo", "farofa", "cebola"],
  },
];

const ingredientes = {
  ingredientesFavoritos: ["tomate", "carne", "cogumelos"],
  ingredientesDetestaveis: ["cebola", "beterraba", "margarina"],
};

const pratoQueEuComo = pratos.find(function (prato, index, array) {
  const ingredienteDetestavelEncontrado = prato.ingredientes.find(
    (ingrediente) => {
      return this.ingredientesDetestaveis.find((ing) => ing === ingrediente);
    },
  );

  if (ingredienteDetestavelEncontrado && index === array.length - 1) {
    return true;
  }

  return ingredienteDetestavelEncontrado === undefined;
}, ingredientes);

console.log(pratoQueEuComo);
