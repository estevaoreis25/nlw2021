import express from "express";
import "dotenv/config";

const app = express();
app.get("/github", (req, res)=>{
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

app.get("/signin/callback", (req, res)=>{
  const {code} = req.query;
  return res.json(code);
})

app.listen(4000, ()=> console.log(`Aplicação Rodando`));