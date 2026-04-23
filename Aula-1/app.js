//https:complex-humor-1df.notion.site/34bcc8c2db9680d1a7d2ff52afa49986
console.log ('Minha primeira aplicação Node.js');

const nome = 'Tobias';
const idade = 20;

console.log ('Nome:', nome);
console.log ('Idade:', idade);

const a = 10;
const b = 5;

console.log ('Soma:', a + b);
console.log ('Multiplicação:', a * b);

const os = require ('os');

console.log ('Sistema:', os.platform ());
console.log ('Memória total:', os.totalmem ());

const http = require ('http');

const servidor = http.createServer ((req, res) => {
  res.end ('Servidor rodando!');
});

servidor.listen (3000, () => {
  console.log ('http://localhost:3000');
});
