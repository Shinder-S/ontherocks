/**** BOTONES ****/
   
document.querySelector("#btn-add").addEventListener("click", addItem);
document.querySelector("#btn-add3").addEventListener("click", add3Items);
document.querySelector("#btn-del").addEventListener("click", delItems);

/**** JSONs ****/

let tableList = [    
            {
                "name" : "Grey Goose",
                "stockBar": 4,
                "stockDeposit": 2,
                "observations": "French D.O.C."
            },
            {
                "name": "Maker's 46",
                "stockBar": 2,
                "stockDeposit": 4,
                "observations": "Best bourbon 2022"
            },
            {
                "name": "Hendrix",
                "stockBar": 1,
                "stockDeposit": 3,
                "observations": "Rock & gin tonic"
            },
            {
                "name": "Tanqueray Sevilla",
                "stockBar": 2,
                "stockDeposit": 6,
                "observations": "Made with orange peel"
            },
            {
                "name": "Habanna",
                "stockBar": 4,
                "stockDeposit": 3,
                "observations": "Special for mojito's"
                }                                       
];


function show(){
    let tableDom = document.querySelector("#tableList");
    tableDom.innerHTML= '';
    let aux = '';
    tableDom.innerHTML +=  `<tr>
                                <td>Drinks</td>
                                <td>Stock in bar</td> 
                                <td>Stock in deposit</td>
                                <td>Observations</td>                           
                            </tr>`
    
    tableList.forEach( stock => {
        //console.log((stock.stockBar + stock.stockDeposit), (stock.name));
        if((stock.stockBar + stock.stockDeposit) <= 4){           
           tableDom.innerHTML += `<tr class='out-stock'>
                                    <td>${stock.name}</td>
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

function addItem(){
    let name = document.querySelector("#drink-name").value;
    let stockBar = document.querySelector("#stock-bar").value;
    let stockDeposit = document.querySelector("#stock-deposit").value;
    let observations = document.querySelector("#observations").value;

    if(name != '' && stockBar != NaN && stockDeposit != NaN && observations != ''){
        tableList.push({
            name: name,
            stockBar: parseInt(stockBar),
            stockDeposit: parseInt(stockDeposit),
            observations: observations
        });
        show();
    }
    else{
        alert("Complete to submit");
    }


}

function add3Items(){
    for(let index = 1; index <= 3; index++) {
        addItem();        
    }
}

function delItems(){
    //let tableDom = document.querySelector("#tableList");
    //tableDom.innerHTML= '';
    tableList = [];
    show();
}

show();