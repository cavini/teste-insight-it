Como rodar o projeto: na pasta root, instalar as dependencias e rodar npm run start

Algumas informações sobre este projeto:

Para poder deixar as mensagens de erro customizadas e poder usar as mensagens dentro do schema do Yup, precisei tirar a propriedade type do campo input, principalmente no caso de e-mail

deixei a logica de setar um erro no estado substituindo a array anterior e não adicionando à array existente porque o yup retorna somente um erro por vez
