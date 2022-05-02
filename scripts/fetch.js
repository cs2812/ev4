let search= async(value)=>{

    // let value= document.getElementById("search").value;
    
    try{
 
   let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value} `)
   
   let data=await res.json();
   console.log(data.articles)
//    append(data.articles)
return data;
   
    }
    catch(err){
        console.log(err)
    }
 
 }

 let append=(data)=>{
     forEach((ele)=>{
         let div1=document.createElement("div")
         div1.setAttribute("id","results")

         let div2=document.createElement("div")

         let img=document.createElement("img")
        img.src=ele.urlToImage;

        let p=document.createElement("p")
        p.innerText=ele.destription;

        div2.append(img,p)

        div1.append(div2)

        document.getElementById("news").append(div1)
         
     })
 }
  
 export {search}