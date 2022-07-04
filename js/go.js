/***** BOTON MENU******/

document.querySelector(".btn-menu").addEventListener("click", toggleMenu);


function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("show");
}; 


/*******
 
 function selected_tab(id){
     document.querySelectorAll("nav-item")
     .forEach((item) => item.classList.remove("selected"));
     document.querySelectorAll("a" + id)
     .forEach((item)=> item.classList.add("selected"));
 }
 
 async function load_content(id){
     let container = document.querySelector("#content");
     try{
         let response = await fetch("stock.html");
         if(response.ok){
             let content = await response.text();
             document.querySelector("#content").innerHTML = content;
         }
         else{
             document.querySelector("#content").innerHTML = "Error loading" + id + "...";
         }
     }
     catch(error){
         container.innerHTML = "Error reached catch";
     }
 }
 
 function push(event){
     let id = event.target.id;
     selected_tab(id);
     document.title = id;
     load_content(id);
     window.history.pushState({id}, `${id}`, `/page${id}`)
 }
 
 window.onload = (event) =>{
     window("index").addEventListener("click", (event)=>push(event));
     window("stock").addEventListener("click", (event)=>push(event));
     window("pictures").addEventListener("click", (event)=>push(event));
     window("contact").addEventListener("click", (event)=>push(event));
 };
 
 window.addEventListener("popstate", (event)=> {
     let stateId = event.state.id;
 })
 * 
 * ****/