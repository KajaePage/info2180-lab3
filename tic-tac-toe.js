document.addEventListener("DOMContentLoaded", loadDOM)

function loadDOM(){ 
    showBoard() 
    }

    function showBoard(){ 
        var boarddiv= document.getElementById("board");
        for ( i =0; i< 9; i++){
	        var divs = boarddiv.getElementsByTagName("div")[i];
        	divs.classList.add("square");
        }
     }
