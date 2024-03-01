import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is a server running on Mike's computer");
});

app.listen(3000, () =>{
    console.log(`Server running on port ${port}.`);
});