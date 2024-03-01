import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is a server running on Mike's computer");
});

app.get("/about", (req, res) => {
    res.send("I am currently the head of developers at Lucidia and I am a game developer and a full stack developer. I also have some experience in smart contracts and solidity");
});

app.get("/contact", (req, res) => {
    res.send("You can contact me at malek.sharabi@lucidia.io")
})

app.listen(3000, () =>{
    console.log(`Server running on port ${port}.`);
});