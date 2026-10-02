import {Router} from 'express';

const router = Router()

let dados = []

// get lista completa

router.get('/', (req, res) => {
    res.json(dados);
} );

// get by id

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const idNum = Number(id);

  let result = {data: {}};

  dados.forEach((dado) => {
    if (dado.id == idNum) {
      result.data = dado;
    }
  });


  if (!result.data) {
    res.json({msg: 'Nenhum produto encontrado'})
  }

  res.json(result);
});

router.post('/', (req, res) => {
    let newUser = req.body;

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

export default router;