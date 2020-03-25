const express = require('express'); //importando o express para o index a paratir da variavél express

const app = express();

app.get('/', (request, response)=>{

  return response.send('Hello World');

});

app.listen(3333);

