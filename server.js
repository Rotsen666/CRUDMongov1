const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.listen(4000, function () {
    console.log('listening on '+port)
});

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Nestor:10torres10@cluster0.kj0gh6t.mongodb.net/notesDB", 
                                {useNewUrlParser: true}, {useUnifiedTopology: true} )

//Create a data schema
const noteSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})