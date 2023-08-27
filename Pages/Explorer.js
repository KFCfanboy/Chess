const PieceImages = {"P":"BPawn", "R":"BRook","H":"BKnight","B":"BBishop","Q":"BQueen","K":"BKing", "p":"WPawn", "r":"WRook","h":"WKnight","b":"WBishop","q":"WQueen","k":"WKing"," ":"Empty"}
let board = [["R", "H", "B", "Q", "K", "B", "H", "R"], ["P", "P", "P", "P", "P", "P", "P", "P"], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], ["p", "p", "p", "p", "p", "p", "p", "p"], ["r", "h", "b", "q", "k", "b", "h", "r"]]
let dragged = null;

for (let n = 0; n < 8; n++) {
    for (let m = 0; m < 8; m++) {
    var div = document.createElement("div");
    div.id = (m+1) + n * 8;
    div.style.maxHeight = "62.5px";
    document.getElementById("board-main").appendChild(div);
    let img = document.createElement("img");
    img.src = "img/Basic/" + PieceImages[board[n][m]] + ".png"
    img.style.position = "absolute"
    img.style.width = "62.5px";
    img.style.height = "62.5px";
    img.style.zIndex = "1"
    img.id = "i" + JSON.stringify((m+1) + n * 8)
    document.getElementById(JSON.stringify((m+1) + n * 8)).appendChild(img)

    img.addEventListener("dragstart", (event) => {
      // store a ref. on the dragged elem
      dragged = event.target;
    });

    img.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });
    
    img.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if ((event.target.id)[0] == "i" && event.target.id != dragged.id) {
            //Validate the move here
            dragged.parentNode.removeChild(dragged);
            let temp = dragged.id
            dragged.id = event.target.id
            event.target.id = temp
            event.target.parentNode.appendChild(dragged);
            let prev = document.getElementById((event.target.id).slice(1, 3))
            prev.appendChild(event.target)
            //Swaps the appropiate images to move the piece
        }
    });
    }

}