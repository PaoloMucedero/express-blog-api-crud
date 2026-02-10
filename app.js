const express = require(`express`)
const app = express()
const port = 3000
// Collegamento file responsabile delle rotte
const postsRouter = require("./routers/posts");

// attivazione cartella public
app.use(express.static("public"));
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