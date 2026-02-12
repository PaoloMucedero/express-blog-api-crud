const express = require(`express`)
const app = express()
const port = 3000

// Import middleware
const checkTime = require(`./middlewares/checkTime`);

// Collegamento file responsabile delle rotte
const postsRouter = require("./routers/posts");

// attivazione cartella public
app.use(express.static("public"));
// attivazione registro body parser
app.use(express.json());

// UTILIZZO MIDDLEWARES
app.use(checkTime);

// devio gestione richieste su file routers/posts.js
app.use("/posts", postsRouter);

// Routing tramite express - vedi file posts.js
// HOME PAGE
app.get("/", (req, res) => {
    res.send("<h1>Home Route app Blog</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})