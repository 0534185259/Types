const f = new Object();
f.name = "cherry"
f.calories = 40
f.price = 5
f.print = function () {
    let str = ""
    for (const key in this) {
        if (typeof (this[key]) !== "function")
            str += key + " " + this[key] + "\n"
    }
    return str
}

const arr = [{
    name: "apple",
    calories: 105,
    price: 5,
    color: "yellow",
    print: function () {
        let str = ""
        for (const key in this) {
            if (typeof (this[key]) !== "function")
                str += key + " " + this[key] + "\n"
        }
        return str
    }
}, {
    name: "banana",
    calories: 165,
    price: 7,
    print: function () {
        let str = ""
        for (const key in this) {
            if (typeof (this[key]) !== "function")
                str += key + " " + this[key] + "\n"
        }
        return str
    }
}, f]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i].color)
        console.log(arr[i].print());

}
let str = ""
for (const key in arr[0]) {
    if (typeof (arr[0][key]) !== "function")
        str += key + " " + arr[0][key] + "\n"
}
console.log(str);

let x = arr[1]
delete x.price
let str2 = arr[1].print();
document.getElementById("second").innerHTML = str2

function changePrice() {
    let price = document.getElementById("price").value
    arr[0].Price = price
    let str3 = arr[0].print();
    document.getElementById("second").innerHTML = str3
}

function deleteCalories() {
    let cal = document.getElementById("calories").value
    let arr2 = arr.filter(x => x.calories <= cal)
    console.log(arr2);
}

for (let i = 0; i < arr.length; i++) {
    Object.defineProperty(arr[i], "Price"
        , {
            get() { return arr[i].price }, set(val) {
                if (val > 10 && val < 10000)
                    arr[i].price = val
            }
        })

}


function MessageBox(foncolor, backgroundcolor, img, mess = { title: "", body: "" }) {
    this.foncolor = foncolor
    this.backgroundcolor = backgroundcolor
    this.img = img
    this.message = { ...mess }

    this.render = function () {
        return `<div style="background-color:${this.backgroundcolor} ;color: ${this.foncolor};">  
      <h1 >${this.message.title}</h1>
      <p >${this.message.body}</p>
      <img  style="width:50px; height:50px;" src=${this.img}>
  </div>`


    }
}

let info = new MessageBox("white", "yellow", "im.jpg",
    { title: "info", body: "bl bla bla" })
let warning = new MessageBox("white", "orange", "im.jpg",
    { title: "warning", body: "oooooooo" })
let error = new MessageBox("white", "red", "im.jpg",
    { title: "error", body: "oooooooo" }
)

document.getElementById("message").innerHTML += info.render()
document.getElementById("message").innerHTML += warning.render()
document.getElementById("message").innerHTML += error.render()

const message = {
    info: new MessageBox("white", "yellow", "im.jpg",
        { title: "info", body: "bl bla bla" }),
    warning: new MessageBox("white", "orange", "im.jpg",
        { title: "warning", body: "oooooooo" }),
    error: new MessageBox("white", "red", "im.jpg",
        { title: "error", body: "oooooooo" })
}

function entermess(e) {
     e.preventDefault()
    let type = document.getElementById("type").value
    let text = document.getElementById("text").value
    let title = document.getElementById("title").value
    
    message[type].message.title = title
    message[type].message.body = text
    document.getElementById("message").innerHTML = message[type].render()


}