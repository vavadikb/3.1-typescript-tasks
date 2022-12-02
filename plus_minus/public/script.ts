enum types {
    plus = "+",
    minus = "-"
}

type signType =  types.minus | types.plus


function clickFunc(type:signType){
    const body = JSON.stringify({
        sign: type
    })
    fetch('http://localhost:3000/plus-minus',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: body
    
    })
    console.log(`${type} was prassed`)
}