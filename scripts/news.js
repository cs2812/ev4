// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let data=JSON.parse(localStorage.getItem("img"))

data.forEach(function(ele){

    let img=document.createElement("img")
    img.src=ele.urlToImage;
    document.getElementById("detailed_news").append(img)
})
