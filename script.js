let words = [
  "aventura",
  "biscoito",
  "cadeado",
  "dominó",
  "escova",
  "foguete",
  "guitarra",
  "hambúrguer",
  "incêndio",
  "jabuti",
  "lampião",
  "macaco",
  "navalha",
  "óculos",
  "parafuso",
  "quintal",
  "raspador",
  "sanduíche",
  "tartaruga",
  "urso",
  "velocímetro",
  "xadrez",
  "zebra",
  "alicate",
  "barriga",
  "corrente",
  "descarga",
  "engrenagem",
  "fogueira",
  "gaveta",
  "inseto",
  "joelho",
  "kombi",
  "lápis",
  "maracujá",
  "navio",
  "ópera",
  "papagaio",
  "quadrado",
  "raquete",
  "sorvete",
  "tesoura",
  "vassoura",
  "xícara",
  "yoga",
  "zangado",
  "amendoim",
  "baralho",
  "camisa",
  "disco",
  "esponja",
  "fita",
  "gato",
  "haste",
  "ilha",
  "janela",
  "ketchup",
  "luva",
  "mola",
  "ninho",
  "órgão",
  "pipoca",
  "quintal",
  "ratoeira",
  "sapato",
  "tatu",
  "urina",
  "veterinário",
  "xerife",
  "youtuber",
  "zangão",
  "abelha",
  "bicicleta",
  "cavalo",
  "disquete",
  "escada",
  "fogão",
  "girafa",
  "helicóptero",
  "igreja",
  "jacaré",
  "kiwi",
  "labirinto",
  "macaco",
  "navio",
  "olho",
  "pato",
  "quadro",
  "relógio",
  "sapo",
  "tartaruga",
  "urubu",
  "vídeo",
  "xadrez",
  "yoga",
  "amarelo",
  "beleza",
  "calor",
  "descida",
  "escuro",
  "festa",
  "gelo",
  "herança",
  "igualdade",
  "jornal",
  "karatê",
  "loucura",
  "melancia",
  "neve",
  "ocasião",
  "piscina",
  "quente",
  "relâmpago",
  "saúde",
  "tigela",
  "universo",
  "velhice",
  "xadrez",
  "zero",
  "alface",
  "bicicleta",
  "caneca",
  ];

  for(let i = 0; i < words.length; i++){
    words[i] = words[i].toUpperCase();
  }
  
  let wordContainer = document.getElementById("word");
  let generateBtn = document.getElementById("generate-btn");
  
  generateBtn.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    wordContainer.textContent = randomWord;
  });


let tempo = 0;
let cronometro;

function atualizarCronometro() {
  tempo += 1000;
  const data = new Date(tempo);
  const horas = data.getUTCHours().toString().padStart(2, '0');
  const minutos = data.getUTCMinutes().toString().padStart(2, '0');
  const segundos = data.getUTCSeconds().toString().padStart(2, '0');
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

function iniciarCronometro() {
  cronometro = setInterval(atualizarCronometro, 1000);
}

function pausarCronometro() {
  clearInterval(cronometro);
}

function reiniciarCronometro() {
  pausarCronometro();
  tempo = 0;
  atualizarCronometro();
}
  


document.getElementById('botao-iniciar').addEventListener('click', iniciarCronometro);
document.getElementById('botao-pausar').addEventListener('click', pausarCronometro);
document.getElementById('botao-reiniciar').addEventListener('click', reiniciarCronometro);
