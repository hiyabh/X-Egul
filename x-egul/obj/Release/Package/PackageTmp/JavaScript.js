var push = document.querySelector("table");
var player = true;

push.addEventListener('click', function (event) {
    var id = event.target.id;
    var th = document.getElementById(id);

    //החלפת לחיצות בין איקס לעיגול בכל לחיצה    
    switch (player) {
        case true:
            th.innerText = "x";
            player = false;
            break;
        case false:
            th.innerText = "o";
            player = true;
            break;
    }

    //אופציות o
    if (document.getElementById(1).textContent === "o" && document.getElementById(2).textContent === "o" && document.getElementById(3).textContent === "o") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(2).classList.add("marked");
        document.getElementById(3).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 
    if (document.getElementById(4).textContent === "o" && document.getElementById(5).textContent === "o" && document.getElementById(6).textContent === "o") {
        document.getElementById(4).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(6).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 
    if (document.getElementById(7).textContent === "o" && document.getElementById(8).textContent === "o" && document.getElementById(9).textContent === "o") {
        document.getElementById(7).classList.add("marked");
        document.getElementById(8).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 
    if (document.getElementById(1).textContent === "o" && document.getElementById(4).textContent === "o" && document.getElementById(7).textContent === "o") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(4).classList.add("marked");
        document.getElementById(7).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    }
    if (document.getElementById(2).textContent === "o" && document.getElementById(5).textContent === "o" && document.getElementById(8).textContent === "o") {
        document.getElementById(2).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(8).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    }
    if (document.getElementById(3).textContent === "o" && document.getElementById(6).textContent === "o" && document.getElementById(9).textContent === "o") {
        document.getElementById(3).classList.add("marked");
        document.getElementById(6).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 
    if (document.getElementById(1).textContent === "o" && document.getElementById(5).textContent === "o" && document.getElementById(9).textContent === "o") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 
    if (document.getElementById(3).textContent === "o" && document.getElementById(5).textContent === "o" && document.getElementById(7).textContent === "o") {
        document.getElementById(3).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(7).classList.add("marked");
        setTimeout(function () { alert("O is win!!!"); }, 1000);
    } 

    //אופציות x
    if (document.getElementById(1).textContent === "x" && document.getElementById(2).textContent === "x" && document.getElementById(3).textContent === "x") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(2).classList.add("marked");
        document.getElementById(3).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(4).textContent === "x" && document.getElementById(5).textContent === "x" && document.getElementById(6).textContent === "x") {
        document.getElementById(4).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(6).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(7).textContent === "x" && document.getElementById(8).textContent === "x" && document.getElementById(9).textContent === "x") {
        document.getElementById(7).classList.add("marked");
        document.getElementById(8).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(1).textContent === "x" && document.getElementById(4).textContent === "x" && document.getElementById(7).textContent === "x") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(4).classList.add("marked");
        document.getElementById(7).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(2).textContent === "x" && document.getElementById(5).textContent === "x" && document.getElementById(8).textContent === "x") {
        document.getElementById(2).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(8).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(3).textContent === "x" && document.getElementById(6).textContent === "x" && document.getElementById(9).textContent === "x") {
        document.getElementById(3).classList.add("marked");
        document.getElementById(6).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(1).textContent === "x" && document.getElementById(5).textContent === "x" && document.getElementById(9).textContent === "x") {
        document.getElementById(1).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(9).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    }
    if (document.getElementById(3).textContent === "x" && document.getElementById(5).textContent === "x" && document.getElementById(7).textContent === "x") {
        document.getElementById(3).classList.add("marked");
        document.getElementById(5).classList.add("marked");
        document.getElementById(7).classList.add("marked");
        setTimeout(function () { alert("X is win!!!"); }, 1000);
    } 
})

//New Game button
function reload() {
    location.reload();
}
