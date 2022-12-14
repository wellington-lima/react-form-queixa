export const problemas = [
  { id: 1, nome: 'Comportamento' },
  { id: 2, nome: 'Aprendizagem' },
  { id: 3, nome: 'Linguagem' }
];

export const hipotese_escrita = [
  { id: 1, nome: 'Pré-silábica' },
  { id: 2, nome: 'Silábica' },
  { id: 3, nome: 'Sem valor' },
  { id: 4, nome: 'Silábica com valor' },
  { id: 5, nome: 'Silábica Alfabético' },
  { id: 6, nome: 'Alfabético' }
];

export const avaliacao = [
  { id: 1, nome: 'Não apresenta' },
  { id: 2, nome: 'Pouco' },
  { id: 3, nome: 'Regular' },
  { id: 4, nome: 'Muito' },
]

export const usuarios = [
  { id: 1, nome: 'Anderson', admin: 1, password: '123456' },
  { id: 2, nome: 'Wellington', admin: 0, password: '123546' }
]

export const descricaoProblema = (id: number) => {
  const descricao = problemas.filter((valor) => valor.id == id)
  return descricao[0].nome;
}

export const descricaoHipoteseEscrita = (id: number) => {
  const descricao = hipotese_escrita.filter((valor) => valor.id == id)
  return descricao[0].nome;
}

export const descricaoAvaliacao = (id: number) => {
  const descricao = avaliacao.filter((valor) => valor.id == id)
  return descricao[0].nome;
}

export const descricaoUsuarios = (id: number) => {
  const descricao = usuarios.filter((valor) => valor.id == id)
  return descricao[0].nome;
}