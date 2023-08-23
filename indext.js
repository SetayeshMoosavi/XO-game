let data=[["","",""],["","",""],["","",""]]
let count = 0
let f = 0
let winner

function clickHandler(x,y){
    console.log(data)
    if (count == 0){
        data[x][y]="X"
        document.getElementById((x*10)+y).value="X"
        f+=1
        count+=1
        whos_turn()
        who_is_the_winner(x,y,data)
    }
    else if (count == 1){
        data[x][y]="O"
        document.getElementById((x*10)+y).value="O"
        f+=1
        count-=1
        whos_turn()
        who_is_the_winner(x,y,data)
    }
}

function who_is_the_winner(x,y,data){
    if (data[x][0]==data[x][1] && data[x][0]==data[x][2] && data[x][1]==data[x][2]){
        document.getElementById("winner").innerHTML ="The winner is: " + data[x][0]
        winner=data[x][0]
        disable()

    }
    if (data[0][y]==data[1][y] && data[0][y]==data[2][y] && data[1][y]==data[2][y]){
        document.getElementById("winner").innerHTML ="The winner is: " + data[0][y]
        winner=data[0][y]
        disable()

    }
    if (x==y){
        if (data[0][0]==data[1][1] && data[0][0]==data[2][2] && data[1][1]==data[2][2]){
            document.getElementById("winner").innerHTML ="The winner is: " + data[0][0]
            winner=data[0][0]
            disable()

        }
    }
    if ( (x==0 && y==2) || (x==2 && y==0) || (x==1 && y==1) ){
        if (data[0][2]==data[1][1] && data[0][2]==data[2][0] && data[1][1]==data[2][0]){
            document.getElementById("winner").innerHTML ="The winner is: " + data[2][0]
            winner=data[2][0]
            disable()

        }
    }
    if (f==9){
        document.getElementById("winner").innerHTML ="WE DONT HAVE A WINNER" 
    }
    
}
 
function whos_turn() { 
    if (count == 0){
        document.getElementById("turn_value").innerHTML ="Turn: X"
    }
    else if (count == 1){
        document.getElementById("turn_value").innerHTML ="Turn: O"
    }
}

function disable(){
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++){
            if (data[i][j]==""){
                document.getElementById((i*10)+j).disabled = true
            }
            
        }
    }
}

function RESET(){
    data=[["","",""],["","",""],["","",""]]

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++){
            document.getElementById((i*10)+j).value=""
        }
    }

   f=0

    if (winner=="X"){
        count=0
        whos_turn()
    }
    else if(winner=="O"){
        count=1
        whos_turn()
    }

    document.getElementById("winner").innerHTML =""

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++){
            document.getElementById((i*10)+j).disabled = false
        }
    }
}


