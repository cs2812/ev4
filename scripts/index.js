// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js";

import {search} from "./fetch.js"

document.getElementById("navbar").innerHTML=navbar();

let show=(e)=>{
    if(e.key==="Enter"){
        let value= document.getElementById("search").value;
        search(value)
        window.location.href="search.html"
    }
}

document.getElementById("search").addEventListener("keydown",show)



let contory=document.getElementById("sidebar").children

for(let ele of contory){
    ele.addEventListener("click",csearch)
}
 
async function  csearch(){
// console.log(this.id)

    try{
    
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`)
    let data= await res.json()
    console.log(data.articles)
    showdata(data.articles)

    }
    catch(err){
        console.log(err)
    }
}
let news=document.querySelector(".news")
let showdata=(data)=>{
news.innerHTML=null;
    data.forEach((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("id","results")

        let div2=document.createElement("div")
        div2.setAttribute("id","img")
        
        let div3= document.createElement("div")
        div3.setAttribute("id","p")

        let img=document.createElement("img")
       img.src=ele.urlToImage;
       div2.append(img)

       let p=document.createElement("p")
       p.innerText=ele.description;
       div3.append(p)

    //    div2.append()

       div1.append(div2,div3)

       news.append(div1)
        
    })
    
} 