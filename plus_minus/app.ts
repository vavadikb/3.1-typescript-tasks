import express, {Request, Response} from 'express'
const app = express()
const PORT = 3000

app.use(express.static('plus_minus/public'));
app.use(express.json())

enum types {
    plus = "+",
    minus = "-"
}

type signType = types.plus | types.minus

app.post('/plus-minus',(req,res)=>{
    const sign: signType = req.body.sign
    console.log(`${sign} was prassed `)
    return res.status(200)
})


app.listen(PORT, () => {
    console.log(`Server is started on port - ${PORT}`)
    console.log('The back result outputting here')
})