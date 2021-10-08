let currentTurn = "X";
let checkArray = [];
document.addEventListener("DOMContentLoaded", loadDOM)


function loadDOM(){ 

    showBoard()
    plays()

}

function showBoard(){ 

    const boarddivs = document.getElementById('board').getElementsByTagName('div');

    for( i=0; i< boarddivs.length; i++ ){
        var divs = boarddivs[i];
        divs.classList.add("square");
        console.log("Board has Loaded!")
    }
}

function plays(){

    const squaredivs = Array.from(document.querySelectorAll(".square"));
    var index;
    for(const div of squaredivs){
        div.classList.remove("X","O");
        div.addEventListener("click", (e) =>{
            div.classList.add(currentTurn);
            div.textContent = currentTurn;
            index = squaredivs.indexOf(div);
            checkArray.push([index,currentTurn]);
            currentTurn = currentTurn == "X" ? "O" : "X";
            console.log(checkArray)
        });
    }
}



