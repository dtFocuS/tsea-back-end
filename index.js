const triviaQuestions = require('./trivia-questions.json');
// import triviaQuestions from "./triviaQuestions.js";
const express = require('express');

const app = express();
const port = 3001;

app.get("/trivia-questions", (req, res) => {
    res.send(triviaQuestions);
   
})


app.listen(port, () => console.log("listening on port" + port));


