
const newnum =[1,2,3,4,5]

const res = newnum.reduce((acc,currval) => acc + currval,0)

console.log(res)

const shoppingcart = [
    {
        item: "cpp course",
        price : 2999
    },
    {
        item : "python course",
        price : 5999
    }
]

const total = shoppingcart.reduce((acc , item) => acc + item.price,0)
console.log(total);
