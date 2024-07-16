var text = 'telkomsel 234'

const removeSpace = (val) => {
    const res = val.replace(' ','')
    return res
}
const reverse = (val) => {
    val = val.split("")
    let res = []
    val.forEach((dt)=>{
        res.unshift(dt)
    })
    
    res = res.join('')
    return res
}

console.log(removeSpace(text))
console.log(reverse(text))
