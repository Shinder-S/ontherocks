
"use strict"
// I define the functions that I am going to have in the api
let arrayStock = [];
const url = "https://60cba6b821337e0017e45320.mockapi.io/api/v1/stock";


async function getArrayStockApi(){ 
    let item;         //Returns the selected array of the stock section
    try{
        let aux = await fetch(`${url}`,{
            "method":"GET",
            "headers":{"Content-type":"aplication/json"},
            "body":JSON.stringify(item)
        });
        arrayStock = await aux.json();
        if(aux.ok){
            console.log(arrayStock);
        }
    }
    catch(error){
        alert("Error trying to fetch data from server");
        arrayStock = [];
    }
}

async function postItemStockApi(item){
        //Upload an item to the api contact section
    try{
        let ans = await fetch(`${url}`,{
            "method":"POST",
            "headers":{"Content-type":"aplication/json"},
            "body":JSON.stringify(item)
        });
        if(ans.status === 201){
            console.log(ans);
        }
    }
    catch(e){
        alert("Error when post item");
    }
}

async function editItemApi(id, item){       //Edit an item of the stock section api
    try{
        let ans = await fetch(`${url}stock/${id}`,{
            "method":"PUT",
            "headers":{"Content-type":"aplication/json"},
            "body":JSON.stringify(item)
        });
        if(ans.status === 200){
            alert("Successfully edited")
        }
        else{
            alert("Item was not edited")
        }
    }
    catch(e){
        alert("Error when put item");
    }
}

async function deleteItemApi(id){               //Delete an item from api stock section
    try{
        let res = await fetch(`${url}stock/${id}`,{
            "method":"DELETE"
        });
        if(res.status == 200){
            alert("Successfully removed")
        }
        else{
            alert("Item was not deleted")
        }
    }
    catch(error){
        alert("An error occurred while deleting")
    }
}

async function arrayFilterApi(name){                //Filter an item of the stock section api
    let items;
    try{
        let ans = await fetch(`${url}stock?search=${name}`);
        items = await ans.json();
        if (ans.ok){
            console.log(items);
        }
        else{
            alert("Name is not found")
        }
    }
    catch(error){
        alert("Error when filtering reached the catch")
    }
    return items;
}


// Define admin functions, they take the Api functions and create the visual in stock.HTML

//Load titles 

//TABLE STOCK

function loadRowsTableList(){             //Load rows from stock table when page is loaded
    try{
        arrayStock = getArrayStockApi();
        if(arrayStock.length != 0){
            for (let i = 0; i < arrayStock.length; i++){
                loadRowTableList(arrayStock[i]);
            }
        }
        else{
            alert("Deposit is empty");
        }
    }
    catch(error){
        alert("error has coming ")
    }
}

function loadRowTableList(item){ //Load rows one by one in the table stock
    
    let drink = item.drink;
    let stockBar = item.stockBar;
    let stockDeposit = item.stockDeposit;
    let observations = item.observations;                
    
    tableList.innerHTML +=  `<tr>
                                <td>${drink}</td>
                                <td>${stockBar}</td>
                                <td>${stockDeposit}</td>
                                <td>${observations}</td>                                          
                            </tr>`;                            
}   

function show(){
    let tableDom = document.querySelector("#tableList");
    tableDom.innerHTML= '';
    tableDom.innerHTML += `
                            <thead>
                                <tr>
                                    <th scope="col">Drink</th>
                                    <th scope="col">StockBar</th>
                                    <th scope="col">StockDeposit</th>
                                    <th scope="col">Observations</th>
                                </tr>
                            </thead>`
    
    arrayStock.forEach( stock => {
        if((stock.stockBar + stock.stockDeposit) <= 4){           
            tableDom.innerHTML += `<tr class='out-stock'>
                                    <td>${stock.drinkName}</td>
                                    <td>${stock.stockBar}</td>
                                    <td>${stock.stockDeposit}</td>
                                    <td>${stock.observations}</td>                                                                        
                                </tr>`;
        }
        else{
            tableDom.innerHTML += `<tr>
                                        <td>${stock.name}</td>
                                        <td>${stock.stockBar}</td>
                                        <td>${stock.stockDeposit}</td>
                                        <td>${stock.observations}</td>                                                                        
                                    </tr>`;
        }        
    });
}

function itemArrayStock(){

    let form = document.getElementById('form-stock');
    let formStock = new FormData(form);
    let drink = formStock.get('drink-name');
    let stockBar = formStock.get('stock-bar');
    let stockDeposit = formStock.get('stock-deposit');
    let observations = formStock.get('observations');
    
    let item = {
        "drink": drink,
        "stockBar": stockBar,
        "stockDeposit": stockDeposit,
        "observations": observations
    }

    return item;
}

function addItemStock(e){           //Add to the visual in table stock and send an item to the api
    e.preventDefault();
    let item = itemArrayStock();
    postItemStockApi(item);
    getArrayStockApi();
    console.log(item);
    show();
}

function add3(e){
    e.preventDefault();
    for (let i = 1; i < 3; i++){
        let item = itemArrayStock();
        arrayStock.push(item);
        postItemStockApi(item);
        loadRowTableList(item, arrayStock.length);
    }
}

function idFilter(selector){
    
    let row = document.querySelector(selector).value;
    id = arrayStock[row-1];
    return id;
}

async function deleteItem(){
    await deleteItemApi(idFilter("#delete"));
    tableList.innerHTML = "";
    loadTitlesStock();
    loadRowsStock();
}

async function editItem(){
    let itemEdited = itemArrayStock();
    await editItemApi(idFilter("#edit"), itemEdited);
    tableList.innerHTML = "";
    loadRowTableList();
    loadRowsTableList();
}

async function filterItem(){
    try{
        let itemFilter = document.querySelector("#filter").value;
        arrayStock = await arrayFilterApi(itemFilter);
        tableList.innerHTML = "",
        loadTitlesStock();

        if(arrayStock.length != 0){
            for (let index = 0; index < arrayStock.length; index++){
                loadRowTableList(arrayStock[index], index+1);
            }
        }
        else{
            alert("Item is not found");
        }
    }
    catch{
        alert("Item is not found");
    }
}

//////////////////////////////////////////////////////////////////////////
// Execute code
//////////////////////////////////////////////////////////////////////////

/**** BOTONES ****/

document.getElementById("btn-add").addEventListener("click", addItemStock);
document.querySelector("#btn-add3").addEventListener("click", add3);
document.querySelector("#btn-delete").addEventListener("click", deleteItem);
document.querySelector("#btn-edit").addEventListener("click", editItem);
document.querySelector("#btn-filter").addEventListener("click", filterItem);

let tableList = document.querySelector("#tableList");
getArrayStockApi();
console.log(getArrayStockApi())
show();
   
