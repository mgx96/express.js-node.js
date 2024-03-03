import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is a server running on a local host");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page")
});

app.post("/register", (req, res) =>{
    res.sendStatus(201);
});

app.put("/user/mike", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/mike", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/mike", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () =>{
    console.log(`Server running on port ${port}.`);
});