const express = require('express');
const { errorMidleware } = require('./middlewares');
const controller = require('./controllers');

const app = express();

app.use(express.json());

app.use(controller.Users);
app.use(controller.Categories);
app.use(controller.BlogPosts);

app.use(errorMidleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
