
interface BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function summ(a: BigObject) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (elem === undefined || elem.cvalue === undefined) return 2022;
        if (typeof elem.cvalue === 'string' ) {
          if(+elem.cvalue > 0 ||  +elem.cvalue  === 0) {
                return +elem.cvalue
            }else{
                return 2022
              }
            }
        if(typeof elem.cvalue === "number") return elem.cvalue
        if (typeof elem.cvalue === 'object') return summ(elem.cvalue);
    });
    if(x.indexOf(2022)>=0) return 2022
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}



let bigObj: BigObject = { 
    hello: {cvalue: 111}, 
    world: {cvalue: {num: {cvalue: {anyNumber: {cvalue: "222"}}}}
          },
    nums:{cvalue:{qwe:{cvalue: "333"}}}
    }


const res = summ(bigObj)
console.log(res)