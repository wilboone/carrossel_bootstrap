'use strict';

const dados = [
  {
    id: 1,
    name: 'Lucas Ferreira',
    depoimento:
      'Amanhã o relógio azul encontrou uma bicicleta perdida perto das nuvens verdes durante a caminhada silenciosa do mercado antigo.',
    img: 'p1.jpg',
  },
  {
    id: 2,
    name: 'Camila Souza',
    depoimento:
      'O computador dançou lentamente enquanto bananas brilhavam ao lado da janela quebrada no final daquela tarde curiosa.',
    img: 'p2.jpg',
  },
  {
    id: 3,
    name: 'Rafael Mendes',
    depoimento:
      'Pequenos gatos amarelos observavam o ônibus vermelho atravessando montanhas invisíveis perto da praça iluminada pelo vento.',
    img: 'p3.jpg',
  },
  {
    id: 4,
    name: 'Juliana Costa',
    depoimento:
      'Uma garrafa transparente caiu sobre livros antigos enquanto pássaros imaginários cantavam músicas estranhas atrás do elevador.',
    img: 'p4.jpg',
  },
  {
    id: 5,
    name: 'Thiago Almeida',
    depoimento:
      'O teclado prateado girou rapidamente durante a chuva silenciosa que cobria árvores tortas próximas ao lago vazio.',
    img: 'p5.jpg',
  },
];

const img = document.querySelector('.img');
const nameAuthor = document.getElementById('name');
const depoimento = document.querySelector('.depoimento');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const aleatorio = document.querySelector('.aleatorio');

prevBtn.addEventListener('click', function (e) {
  e.preventDefault();
});

let currentItem = 0;

/// funçao para plotar os dados

const mostrar = function (pessoa) {
  const item = dados[pessoa];
  img.src = item.img;
  nameAuthor.innerHTML = item.name;
  depoimento.innerHTML = item.depoimento;
};

/// carregando o primeiro item

window.addEventListener('DOMContentLoaded', function () {
  mostrar(currentItem);
});

/// botao anterior
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem >= dados.length) currentItem = 0;
  mostrar(currentItem);
});

/// botao proximo
prevBtn.addEventListener('click', function () {
  if (currentItem === 0) {
    currentItem = dados.length - 1;
  } else {
    currentItem--;
  }
  mostrar(currentItem);
});

/// botao aleatorio

let min;
let max;
let numero;

/// gerar um numero entre 0 e o tamanho maximo da array de dados

const gerarNumero = function () {
  min = 0;
  max = dados.length - 1;
  numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return Number(numero);
};

aleatorio.addEventListener('click', function () {
  gerarNumero();
  console.log(numero);

  /// condiçao para nao repetir

  do {
    gerarNumero();
  } while (numero === currentItem);

  currentItem = numero;

  /// plotar
  mostrar(currentItem);

  //   if (numero === currentItem) {
  //     numero++;
  //     currentItem = numero;
  //     mostrar(numero);
  //   } else {
  //     currentItem = numero;
  //     mostrar(numero);
  //   }
});
