import express from "express";

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("server is resdy")
});
app.listen(port,()=>{
    console.log(`app listinening port${port}`);
})