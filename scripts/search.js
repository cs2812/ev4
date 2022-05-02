// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import { search } from "./fetch.js";

let show=(e)=>{
    if(e.key==="Enter"){
        let value= document.getElementById("search").value;
        search(value).then(data=>{
            // let box=document.querySelector(".news")
            // box.innerHTML=null
            showdata(data.articles)
        })

        // window.location.href="search.html"
    }
}
document.getElementById("search").addEventListener("keydown",show)

let showdata=(data)=>{
    data.forEach((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("id","results")

        let div2=document.createElement("div")
        div2.setAttribute("id","img")
        
        let div3= document.createElement("div")
        div3.setAttribute("id","p")

        let img=document.createElement("img")
       img.src=ele.urlToImage;
       img.addEventListener("click",function(){
           go(ele)
           window.location.href="news.html"
       })
       div2.append(img)

       let p=document.createElement("p")
       p.innerText=ele.description;
       div3.append(p)

    //    div2.append()

       div1.append(div2,div3)

       document.querySelector(".news").append(div1)
        
    })
    
} 
function go(ele){
    let arr=[]
    arr.push(ele)
    localStorage.setItem("img",JSON.stringify(arr))

}

