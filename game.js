
const grid =document.querySelector(".grid")

const player1Start = [40,120]
let player1Currentpostion = player1Start

const player2Start = [560,120]
let player2Currentpostion = player2Start

//draw line
const line =document.createElement("div")
line.classList.add("line")
grid.appendChild(line)

//add user 1
    const user1 = document.createElement("div")
    user1.classList.add("user")
    drawUser1()
    grid.appendChild(user1)
    
//draw user1
function drawUser1(){
    user1.style.left = player1Currentpostion[0]+"px"
    user1.style.top = player1Currentpostion[1]+"px"
}

//move user1
function moveUser1(e){
    switch(e.key){
        case "w":
            if(player1Currentpostion[1]<250){
            player1Currentpostion[1] -= 10
            drawUser1()
            }
            break
        case "s":
             if(player1Currentpostion[1]>0){
                player1Currentpostion[1]+=10
              drawUser1()
             }
             break
    }
}

//add user 2
const user2 = document.createElement("div")
    user2.classList.add("user")
    drawUser2()
    grid.appendChild(user2)

//draw user 2
function drawUser2(){
    user2.style.left = (player2Currentpostion[0])+"px"
    user2.style.top = (player2Currentpostion[1])+"px"
}

//move user2
function moveUser2(e){
    switch(e.key){
        case "ArrowDown":
            if(player2Currentpostion[1]<250){
            player2Currentpostion[1] += 10
            drawUser2()
            }
            break
        case "ArrowUp":
             if(player2Currentpostion[1]>0){
                player2Currentpostion[1]-=10
              drawUser2()
             }
             break
    }
}

document.addEventListener("keydown",moveUser2)
document.addEventListener("keydown",moveUser1)



