const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1><ul><li>mango</li><li>orange</li></ul>";
//     res.send(code);

app.get("/",(req,res) => {
    res.send("you contacted root path");
});

// app.get("/apple", (req,res) => {
//     res.send("you contacted apple path");
// })

app.get("/:username/:id",(req,res) => {
    let {username,id} = req.params;
    let htmlStr = `<h1>WELCOM TO THE PAGE OF @${username}</h1>`;
    res.send(htmlStr);
});

app.get("/search",(req,res) => {
    console.log(req.query);
    res.send("no results");
});