const postsList = require(`./../data/posts`)

function index(req, res) {
    // copiamo la logica dell'index
    router.get("/", (req, res) => {
        // devo creare una variabile che parte dallo stesso array e riceve quello modificato da .filter
        let filteredList = postsList;
        // logica del filtro
        if (req.query.title) {
            filteredList = postsList.filter(
                post => post.title.includes(req.query.title)
            );
        }
        // Qui lo riconfiguro come oggetto di un array
        const oggettoListaPost = {
            numeroPost: postsList.length,
            listaPost: filteredList
        };
        // test funzionamento filtro
        res.json(oggettoListaPost)
        //res.send("Lista dei post");
    });
}

function show(req, res) {
    // copiamo la logica della show
    router.get("/:id", (req, res) => {
        // !!! RECUPERA E RIPETI parseINT e .find !!!
        /* CON id = parseINT rendo un numero l'ID dell'array di oggetti (postsList) */
        const id = parseInt(req.params.id)
        /* avendo reso id un numero lo posso trovare e confrontare con .find */
        const post = postsList.find(post => post.id === id);
        /* Logica di verifica esistenza post richiesto */
        if (!post) {
            res.status(404)
            return res.json({
                error: "Not Found!",
                message: "Post inesistente"
            })
        }

        res.json(post)
        // TEMPORARY DEBUG
        //res.send(`Dettaglio del post ${req.params.id}`);
    });
}
function store(req, res) {
    // copiamo la logica della store
}
function update(req, res) {
    // copiamo la logica dell'update
}
function destroy(req, res) {
    // copiamo la logica della destroy..
}
// esportiamo tutto
module.exports = { index, show, store, update, destroy }