let currentTurn;
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

    const boarddivs = document.getElementById('board').getElementsByTagName('div');
    for(const div of boarddivs){
        div.classList.remove("X","O");
        div.addEventListener("click", (e) =>{
            div.classList.add(currentTurn);
            div.textContent = currentTurn;
            currentTurn = currentTurn == "X" ? "O" : "X";
        });
    }

    currentTurn = Math.round(Math.random(0,1)) == 1 ? "X" : "O";
}