import express from 'express'
import { connection } from './postgrsql.js';


const app=express();


const PORT =3000;

connection();

app.get("/api",(req,res) =>{
    res.json({"user":["userone","usertwo"]})
})


app.listen(PORT,() => {
    console.log("server is running at", {PORT});

});