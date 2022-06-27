checkStock();

// I define the functions that I am going to have in the api

function checkStock(){
    
    let url = "https://60cba6b821337e0017e45320.mockapi.io/api/v1/";
    
    async function getArrayStockApi(){          //Returns the selected array of the stock section
        let stock;
        try{
            let aux = await fetch(`${url}stock`);
            stock = await aux.json();
            if(aux.ok){
                console.log(stock);
            }
            else{
                alert("We have a problem to get the stock from api");
                stock = [];
            }
        }
        catch(error){
            alert("Error trying to fetch data from server");
            stock = [];
        }
        return stock;
    }

    async function postItemStockApi(item){              //Upload an item to the api stock section
        try{
            let ans = await fetch(`${url}stock`,{
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

    async function getArrayDepositApi(){                //This saves me an items array with the data from the stock section api
        let items;
        try{
            let aux = await fetch(`${url}stock`);
            items = await aux.json();

            if(aux.ok){
                console.log(items);
            }
            else{
                alert("We have a problem to get the stock from api");
                items = [];
            }
        }
        catch(error){
        alert("We have a problem to get the stock from api")
        items = [];    
        }
        return items;
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

}