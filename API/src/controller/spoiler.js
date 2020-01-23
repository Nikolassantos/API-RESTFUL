const Spoiler = require('../model/spoiler');

exports.buscarUm = (request, response , next ) => {
  const id = request.params.id;

  Spoiler.findByid(id)
  .then(spoiler => { //Registra oque queremos saber 
    if (spoiler){
      respponse.send(spoiler); // Se foi retornado algo do banco algo sera impresso.
    }
    else {
      response.status(404).send(); // se nada existir sera retornado um erro 404.
    }
  })
  .catch(error => next(error)); // se ouve algum erro qualquer que seja sera passado para o proximo midlleware.
};

exports.buscarTodos = (request , response , next) => {  
  let limite = parseInt(request.query.limite || 0);
  let pagina = parseInt(request.query.pagina || 0);

  if (!Number.isInteger(limite) || !Number.isInteger(pagina)){
    response.status(400).send();
  }

  const ITENS_POR_PAGINA = 10;

  limite =  limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina = limite;

  spoiler.findall({ limit: limite, offset: pagina })
  .then(spoilers => {
    response.send(spoilers);
<<<<<<< HEAD
  })
=======
  })
>>>>>>> 5ac55c45ede045326d930528dd4709438e1ab8f8
}
exports.criar = (request, response, next ) => {
  const titulo = request.body.titulo
  const espoliador = request.body.espoliador
  const descrição = request.body.descrição

  Spoiler.create({
    titulo:titulo,
    espoliador: espoliador,
    descrição: descrição
  }) . then(() => {
    response.status(201).send();
  }).catch((error) => next(error))
}

exports.atualizar = (request, response, next) => {
  const id = request.params.id;

  const titulo = request.body.titulo;
  const espoliador = request.body.espoliador;
  const descrição = request.body.descrição;

  Spoiler.findByid(id) 
  .then(spoiler =>{
    if (spoiler) {
        spoiler.update(
        { titulo: titulo,
        espoliador: espoliador,
        descrição: descrição,
        },
        { where: { id: id } }
      )
      .then(() =>{
        response.send();
      })
      .catch(error => next(error))
    } else {
      response.status(404).send();
    }
  })
  .catch(error => next (error));
}

exports.excluir = (request, response, next) => {
  const id = request.params.id;

  Spoiler.findByid(id)
  .then(spoiler => {
    if (spoiler) {
      Spoiler.destroy({
        where: { id: id }
      })
      .then (() => {
        response.send();
      })
      .catch(error => next(error));
    } else {
      response.status(404).send();
    }
  })
  .catch(error => next (error));

}