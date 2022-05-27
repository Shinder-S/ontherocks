/**** BOTONES ****/
   
document.querySelector("#btn-add").addEventListener("click", addItems);
document.querySelector("#btn-add3").addEventListener("click", add3Items);
document.querySelector("#btn-del").addEventListener("click", delItem);

/**** JSONs ****/

let tableList = [
        
                {
                    name: "Grey Goose",
                    stockBar: 4,
                    stockDeposit: 2,
                    observations: "French D.O.C."
                },
                {
                    name: "Maker's 46",
                    stockBar: 2,
                    stockDeposit: 4,
                    observations: "Best bourbon 2022"
                },
                {
                    name: "Hendrix",
                    stockBar: 3,
                    stockDeposit: 3,
                    observations: "Rock & gin tonic"
                },
                {
                    name: "Tanqueray Sevilla",
                    stockBar: 2,
                    stockDeposit: 6,
                    observations: "Made with orange peel"
                },
                {
                    name: "Habanna",
                    stockBar: 4,
                    stockDeposit: 3,
                    observations: "Special for mojito's"
                    }                                       
    ];



function show(){
let tableDom = document.querySelector("#tableList");
tableDom.innerHTML= '';
tableDom.innerHTML +=  `<tr>
                            <td>Drinks</td>
                            <td>Stock in bar</td> 
                            <td>Stock in deposit</td>
                            <td>Observations</td>                           
                        </tr>`

tableList.forEach( stock => {
    
});
   

    tableDom.innerHTML += `<tr ${aux}>
                                <td>${item.name}</td>
                                <td>${item.stockBar}</td>
                                <td>${item.stockDeposit}</td>
                                <td>${observations}</td>                                                                        
                            </tr>`;

tableDom.innerHTML +=   `<tr>
                            <td></td>
                            <td></td>
                            <td></td> 
                            <td>TOTAL</td>
                        </tr>
                        <tr id="total">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td >${total}</td>                                 
                        </tr>`;

                        
}

addBuyItems();

show();
