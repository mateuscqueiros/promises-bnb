let products = fetch('https://dummyjson.com/products');

products
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('Concluindo o fetch'));

let promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve('O show vai acontecer!');
  } else {
    reject(new Error('O show foi cancelado'));
  }
});

promise
  .then((data) => 'Then data - ' + data)
  .then((data) => console.log(data))
  .catch((err) => console.error('Erro: ', err))
  .finally(() => console.log('Obrigado a todos!'));
