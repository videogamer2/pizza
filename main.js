var i;
var j;
menuListArray = ["Pizza Vegetariana",
                "Pizza de Queijo",
                "Pizza de Linguiça",
                "Pizza de Pimenta",
                "Pizza Doce",
                "Pizza de 2 Queijos",
                "Pizza de 3 Queijos",
                "Pizza de 4 Queijos",
                "Pizza de 5 Queijos",
                "Pizza sem Queijo",
                "Queijo sem Pizza",
                "Pizza de Calabresa",
                "Pizza Marguerita",
                "Pizza de Alho",
                "Pizza de Pepperoni",
                "Pizza de Papparazi",
                "Pizza sem Tomate",
                "Calzone",
                "Pizza Portuguesa",
                "Pizza Espanhola",
                "Pizza Alemã",
                "Pizza Francesa",
                "Pizza 2D",
                "Pizza 3D",
                "Pizza 4D",
                "Pizza de Bife",
                "Pizza de Frango",
                "Pizza de Peixe",
                "Pizza de Costela",
                "Pizza de Sushi",
                "Pizza Frutos do Mar",
                "Pizza Animais do Mar",
                "Pizza de Queijo",
                "𝗣𝗶𝘇𝘇𝗮 𝗲𝗺 𝗡𝗲𝗴𝗿𝗶𝘁𝗼"
                    ];

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata+ menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
        menuListArray.sort();
        var htmldata="";
        var imgtags="<img id='im1' src='images/pizzaImg.png'>";
    for(var j=0;j<menuListArray.length;j++){
        htmldata=htmldata+imgtags+ menuListArray[j]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}