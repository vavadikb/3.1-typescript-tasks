function mapObject<Object extends Record<string, Object[keyof Object]>, NewObj> (obj: Object, func: (val: Object[keyof Object]) => NewObj) {
    let NewObj: Partial<Record<keyof Object, NewObj>> = {}
    for(let item in obj) {
        NewObj[item] = func(obj[item])
    }
    return NewObj
}

const result = mapObject({ "vadim" : 5, "petya": 2 }, (x) => x > 2)
console.log(result)