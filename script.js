let idiomaAtual = 'pt-br'; // Idioma padrão
let isDarkMode = false; // Verifica se está no modo escuro

function trocarIdioma(lang) {
  idiomaAtual = lang;
  exibirTraducao();
  atualizarTextos(); // Atualiza os textos quando o idioma é alterado
}

function exibirTraducao() {
  const traducao = translations[idiomaAtual];
  const elementos = document.querySelectorAll('[data-translate]');

  elementos.forEach(elemento => {
    const chave = elemento.getAttribute('data-translate');
    if (traducao[chave]) {
      elemento.textContent = traducao[chave];
    }
  });
}

// Exibir a tradução inicial
exibirTraducao();

let textos = []; // Array de textos inicial vazio

function atualizarTextos() {
  textos =
    idiomaAtual === 'pt-br'
      ? [
          'Desenvolvedor Front-End',
          'Desenvolvedor Back-End',
          'Desenvolvedor Full-Stack',
          'Engenheiro de Software'
        ]
      : [
          'Front-End Developer',
          'Back-End Developer',
          'Full-Stack Developer',
          'Software Engineering'
        ];
}

atualizarTextos(); // Atualiza os textos iniciais

let index = 0;
let isApagando = false;
const velocidadeDigitacao = 100; // Velocidade em milissegundos
const tempoApagar = 1000; // Tempo de espera antes de apagar

function mostrarTexto() {
  const textoAtual = textos[index].toUpperCase();
  const textoElemento = document.getElementById('texto-digitado');

  if (!isApagando) {
    textoElemento.textContent = textoAtual.substring(
      0,
      textoElemento.textContent.length + 1
    );
    if (textoElemento.textContent === textoAtual) {
      isApagando = true;
      setTimeout(mostrarTexto, tempoApagar);
      return;
    }
  } else {
    textoElemento.textContent = textoAtual.substring(
      0,
      textoElemento.textContent.length - 1
    );
    if (textoElemento.textContent === '') {
      isApagando = false;
      index = (index + 1) % textos.length;
    }
  }

  setTimeout(
    mostrarTexto,
    isApagando ? velocidadeDigitacao / 2 : velocidadeDigitacao
  );
}

// Chame a função para iniciar o efeito
mostrarTexto();

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
}
