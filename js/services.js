
"use strict"
// I define the functions that I am going to have in the api
const url = "https://62c21961eff7f7856f19b916.mockapi.io/stock/";

let arrayStock = [];

async function getAllFromApi(){          //Returns the selected array of the stock section
    try{
        let aux = await fetch(`${url}`,{
            "method": "GET",
            "headers": {"Content-type":"application/json"},
        });
        arrayStock = await aux.json();
        if(aux.ok){
            console.log(arrayStock);
        }
    }
    catch(error){
        alert("Error trying to compiled data from server");
        arrayStock = [];
    }
}

async function postItemStockApi(item){      //Upload an item to the api contact section
    try{
        let aux = await fetch(`${url}`,{
            "method": "POST",
            "headers": {"Content-type":"application/json"},
            "body": JSON.stringify(item)
        })
    }
    catch(error){
        alert("error when post item api")
    }

}

async function editItemApi(item, id){           //Edit an item of the stock section api
    try{
        let ans = await fetch(`${url}${id}`,{
            "method": "PUT",
            "headers": {"Content-type":"application/json"},
            "body": JSON.stringify(item)
        });
    }
    catch(e){
        alert("Error when put item");
    }
}

async function deleteItemApi(id){               //Delete an item from api stock section
    try {
        let aux = await fetch(`${url}/${id}`,{
            "method": "DELETE",
            "headers":{"Content-type":"application/json"},
        });
    } catch (err) {
        alert("error when delete")
    }
}


// Define admin functions, they take the Api functions and create the visual in stock.HTML

//Load titles 

//TABLE STOCK

async function loadRowsTableList(){             //Load rows from stock table when page is loaded
    try{
        arrayStock = await getArrayStockApi();
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

async function loadRowTableList(){ //Load rows one by one in the table stock
    let item = arrayStock;
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
    tableList.innerHTML= '';
    tableList.innerHTML += `
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Drink</th>
                                    <th scope="col">StockBar</th>
                                    <th scope="col">StockDeposit</th>
                                    <th scope="col">Observations</th>
                                </tr>
                            </thead>`
    
    arrayStock.forEach(stock => {
        if ((stock.stockBar + stock.stockDeposit) <= 4) {
            tableList.innerHTML += `<tr class='out-stock'>
                                    <td>${stock.id}</td>
                                    <td>${stock.drink}</td>
                                    <td>${stock.stockBar}</td>
                                    <td>${stock.stockDeposit}</td>
                                    <td>${stock.observations}</td>                                                                        
                                </tr>`;
        }
        else {
            tableList.innerHTML += `<tr>
                                        <td>${stock.id}</td>
                                        <td>${stock.drink}</td>
                                        <td>${stock.stockBar}</td>
                                        <td>${stock.stockDeposit}</td>
                                        <td>${stock.observations}</td>                                                                        
                                    </tr>`;
        }
    });
}

function createItemFromInputs(){
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

function checkingfields (){
    try{
        let infoform = document.getElementById('form-stock').elements;
        if (infoform[0].value == '' || infoform[1].value == '' || infoform[2].value == '' ||infoform[3].value == '') {
            alert('Fields with * are required. Complete to submit.')
            return false;
        }
        else{
            return true;
        }
    }
    catch(e){
        alert("Error when check fields")
    } 
}

async function addItemStock(){           //Add to the visual in table stock and send an item to the api
    if(checkingfields() == true){
        let item = createItemFromInputs();
        await postItemStockApi(item);
        await getAllFromApi();
        show();
    }
}

async function add3(){
    for (let i = 0; i < 3; i++){
        await addItemStock();
    }
}

async function deleteItem(){
    let id = document.getElementById("delete-edit-input").value;
    console.log(id);
    await deleteItemApi(id);
    await getAllFromApi();
    show();
}

async function editItem(){
    let id = document.getElementById("delete-edit-input").value;
    let item = createItemFromInputs();    
    await editItemApi(item, id);
    await getAllFromApi();
    show();
}

//////////////////////////////////////////////////////////////////////////
// Execute code
//////////////////////////////////////////////////////////////////////////

/**** BOTONES ****/

document.querySelector("#btn-add").addEventListener("click", addItemStock);
document.querySelector("#btn-add3").addEventListener("click", add3);
document.querySelector("#btn-delete").addEventListener("click", deleteItem);
document.querySelector("#btn-edit").addEventListener("click", editItem);

let tableList = document.querySelector("#tableList");
async function inic(){
    await getAllFromApi();
    show();
}

inic();
   
