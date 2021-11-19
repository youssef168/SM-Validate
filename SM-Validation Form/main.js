const Form = document.querySelector('form');

const txtEm = document.getElementById('text')

var exp = document.getElementById('exption');

let sus = document.getElementById('success');

const input = document.getElementById('input');


Form.addEventListener("submit", (e) => {
    console.log("Iam Here")
    e.preventDefault()
    let valKey = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (input.value == '') {
        // console.log("Empty")
        txtEm.innerText = "Can't Be Empty"
            // exp.style.display = "block"
    } else if (!input.value.match(valKey)) {
        exp.style.display = 'block'
        sus.style.display = 'none'
        txtEm.style.display = 'none'
    } else {
        exp.style.display = 'none'
        sus.style.display = 'block'
        txtEm.style.display = 'none'
    }
})


function Phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price;
}

console.log(Phone.prototype)
let phone1 = new Phone(123, 'red', 5000);

console.log(phone1.serial)
console.log(phone1.color)
console.log(phone1.price)

// phone1.type = "IPHONE"