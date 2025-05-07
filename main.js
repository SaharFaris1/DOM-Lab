let text=document.getElementsByClassName("title")[0]
text.style.color="red"
text.style.background="blue"

let p1=document.getElementById("item")
p1.style.fontWeight = "bold";


let img = document.getElementsByTagName("img")[0];
img.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

img.style.height="100px"

let ul = document.querySelector("#items");

let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');
list1.innerText = "li1";
list2.innerText = "li2";
list3.innerText = "li3";

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);
ul.style.display = "flex";



let table = document.createElement("table");
table.classList.add("my-table");

let rows = 2;
let cols = 3;

for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");
    let rowContent = `data ${i}`;
    for (let j = 1; j <= cols; j++) {
        let td = document.createElement("td");
        td.textContent = `${rowContent} - data ${j}`; 
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);






