const baslikekle = ()=>{
    const baslik = document.createElement("h1");
    const newcontent = document.createTextNode("RESİM GALERİSİ");
    baslik.appendChild(newcontent);
    baslik.classList.add("baslik");
    document.body.appendChild(baslik);
}
baslikekle()

const body = document.createElement("div");
body.setAttribute("id","body");
document.body.appendChild(body);

function creatediv(){
    console.log("Tıklandı");
}


const addimg = ()=>{
    for(let i = 0; i<15;i++){
    let a =parseInt(i) + 1;
    const img = document.createElement("img");
    const imga = document.createElement("a");
    imga.setAttribute("id","link"+a);
    imga.classList.add("links");
    img.src = "https://picsum.photos/300/300?random=" + i;
    img.classList.add("img");
    document.getElementById("body").appendChild(imga);
    document.getElementById("link"+a).appendChild(img);
    document.getElementById("link"+a).addEventListener("click", creatediv);
    }
}
addimg()
