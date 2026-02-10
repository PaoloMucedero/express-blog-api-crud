// QUESTO FILE GESTISCE TUTTE LE ROTTE DELLA MIA APP
const express = require("express");
const router = express.Router();

// UTILIZZO IL FILE CHE CONTIENE L'ARRAY DI OGGETTI
const postsList = require(`./../data/posts`)

// INDEX → lista di tutti i post
router.get("/", (req, res) => {
  // provo a filtrare la lista di post

  // devo creare una variabile che parte dallo stesso array
  let filteredList = postsList;
  // scrivo la logica del filtro
  if (req.query.title) {
    filteredList = postsList.filter(
      post => post.title.includes(req.query.title)
    );
  }



  const oggettoListaPost = {
    numeroPost: postsList.length,
    listaPost: filteredList
  };
  // test funzionamento filtro
  res.json(oggettoListaPost)
  //res.send("Lista dei post");
});

// SHOW → dettaglio di un singolo post
router.get("/:id", (req, res) => {
  res.send(`Dettaglio del post ${req.params.id}`);
});

// CREATE → creazione di un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// UPDATE → modifica di un post esistente
router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

// DELETE → cancellazione di un post
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});



module.exports = router;