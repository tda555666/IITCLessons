// let img = document.getElementById("david")
// console.dir(img)


// let as = document.getElementsByTagName("img")
// console.log(as)

// let imgs = document.getElementsByClassName("img");
// console.log(imgs);

// let as = document.getElementsByTagName("a");
// console.log(as);


// let links = document.getElementsByTagName("my-link");
// console.log(links);

// for (let link of links) {
//     console.log(link);
//     a.innerText = "i am link !!";
// }
// let el = document.querySelector(".my-link")
// console.log(el);

let el = document.querySelectorAll(".my-link")
for (let link of el) {
    console.log(link);
    a.innerText = "i am link !!";
}