const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));


// SMART SEARCH
app.post("/search", (req, res) => {

    let query = req.body.query.toLowerCase();

    if (query.includes("exam")) {
        res.json({ result: "Exam Cell is in Block B, Ground Floor" });
    }
    else if (query.includes("bonafide")) {
        res.json({ result: "Bring ID card and application form to Admin Office" });
    }
    else {
        res.json({ result: "Information not found" });
    }

});


// FACULTY LOCATOR
app.post("/faculty", (req, res) => {

    let name = req.body.name;

    if (name === "rao") {
        res.json({ result: "Currently in Lab 2 (10–11 AM)" });
    }
    else {
        res.json({ result: "Faculty location unavailable" });
    }

});


// CAMPUS NAVIGATION
app.post("/navigation", (req, res) => {

    let location = req.body.location;

    if (location === "examcell") {
        res.json({ result: "Go straight → turn left → Ground Floor" });
    }
    else {
        res.json({ result: "Route not found" });
    }

});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});