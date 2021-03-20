//importar o express e o body-parser
const express = require('express')
const bodyParser = require('body-parser')

//inicializar o express
const app = express()

//configurar o ejs e a pasta estática
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rota
app.get('/',(req,res) =>{
    res.render('pg_principal')
})

app.get('/consumo',(req,res) =>{
    res.render('pg_media_consumo')
})

app.get('/alcool_gasolina',(req,res) =>{
    res.render('pg_comb_comp')
})

app.get('/custo_percurso',(req,res) =>{
    res.render('pg_media_percurso')
})

//Calcular a autonomia do carro
app.post('/consumo', (req,res)=>{
    const {litros, km_perc, op} = req.body

    let tot = op === "calc"  ? Number(km_perc) / Number(litros): "";
    tot = parseFloat(tot).toFixed(2);

res.render('pg_media_consumo',{tot})

})


//calcular qual combustível escolher
app.post('/alcool_gasolina', (req,res)=>{
    const{op} = req.body 
    let {gasolina, etanol} = req.body

    let combustivel;
    let tot = op === "calc" ? Number(etanol) / Number(gasolina) : "";
    Number(tot) < 0.7 ? combustivel = "Etanol" : combustivel = "Gasolina";

res.render('pg_comb_comp',{tot, gasolina, etanol, combustivel})

})


//calcular o gasto com determinado percurso
app.post('/percurso', (req,res)=>{
    const {km_perc, comb, auto, op} = req.body

    let tot = op === "calc" ? (Number(km_perc) / Number(auto)) * Number(comb) : "0.0";
    tot = parseFloat(tot).toFixed(2);

res.render('pg_media_percurso',{tot, km_perc, comb, auto})

})


//ouvir porta
app.listen(8080)