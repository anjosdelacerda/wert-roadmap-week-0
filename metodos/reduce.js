const biblioteca = [
  {
    escritor: 'Clarice Lispector',
    genero: 'feminino',
    livros: ['Hora da Estrela', 'Água viva', 'A Paixão Segundo G.H.'],
    pais: 'Brasil'
  },
  {
    escritor: 'Eduardo Galeano',
    genero: 'masculino',
    livros: ['O Livro dos Abraços', 'As Veias Abertas da América Latina', 'Os Filhos Dos Dias'],
    pais: 'Uruguai'
  },
  {
    escritor: 'José Saramago',
    genero: 'masculino',
    livros: ['As Intermitências da Morte', 'Ensaio Sobre a Cegueira', 'O Evangelho Segundo Jesus Cristo'],
    pais: 'Portugal'
  },
  {
    escritor: 'Hilda Hilst',
    genero: 'feminino',
    livros: ['Cartas de Um Sedutor', 'Tu Não Te Moves de Ti', 'Do Desejo', 'Kadosh'],
    pais: 'Brasil'
  }
]

const numeroDeLivros = biblioteca.reduce((acc, cur) =>{
 return acc + cur.livros.length
}, 0)

// console.log(numeroDeLivros)

const escritoresPorGenero = biblioteca.reduce((acc, cur) =>{
  if(!acc[cur.genero]){
    acc[cur.genero] = []
  }
  acc[cur.genero].push(cur)
  return acc
}, {})

// console.log(escritoresPorGenero)

const escritoresBrasileiros = biblioteca.reduce((acc, cur) =>{
  if(cur.pais === 'Brasil'){
    acc.push(cur.escritor)
  }
  return acc
}, [])

//aqui temos uma otimização do uso de map + filter
console.log(escritoresBrasileiros)
