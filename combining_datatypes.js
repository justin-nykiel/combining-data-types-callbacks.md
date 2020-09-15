const crayonBox = {
    crayons: ['red' , 'orange', 'blue']
}
console.log(crayonBox.crayons[2])

const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue'
    }
}
console.log(bottle.cap.material)
const receipt = [
    {
        name: 'shirt',
        price: 80
    }
]
console.log(receipt[0].price)

const apartmentBuilding = [['larry', 'moe', 'curly'], 'name']
console.log(apartmentBuilding[0][1])

const knit = () => {
    return {item: 'scarf', size: '6ft'}
}
console.log(knit().item)

const crayonSelector = () => {
    return crayonBox; 
}
console.log(crayonSelector().crayons[0])

const powerButton = () => {
    return options();
}
const options = () => {
    console.log("select a song")
}
powerButton()


const vendingMachine = {
    snacks: [{name: "twix", price: 2}, {name: "butterfinger", price: 1}, {name: "reeses", price: 1.5}],
    vend: function(num) {
        return vendingMachine.snacks[num].name
    }
}

console.log(vendingMachine.vend(0))