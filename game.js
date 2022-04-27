
const grid =document.querySelector(".grid")

const player1Start = [40,120]
let player1Currentpostion = player1Start

const player2Start = [560,120]
let player2Currentpostion = player2Start

const ballStart = [295,145]
let ballCurrentposition = ballStart

let xDirection = -2
let yDirection = 2

let score1 =0
let score2 =0

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
            if(player1Currentpostion[1]>0){
            player1Currentpostion[1] -= 10
            drawUser1()
            }
            break
        case "s":
             if(player1Currentpostion[1]<250){
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

setInterval(moveUser1,600)
setInterval(moveUser1,600)
document.addEventListener("keydown",moveUser2)
document.addEventListener("keydown",moveUser1)

//add ball
const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)

//draw ball
function drawBall(){
    ball.style.left = ballCurrentposition[0]+"px"
    ball.style.top = ballCurrentposition[1]+"px"
}

//move ball
function moveBall(){
ballCurrentposition[0] += xDirection
ballCurrentposition[1] += yDirection
checkforColisions()
drawBall()
setScores()
}
function start(){
timerid=setInterval(moveBall,15)
}
//check for colisions

function checkforColisions(){
    //wall colisions
  if( ballCurrentposition[1]<0){
      yDirection = 2
  }
  if( ballCurrentposition[1]>300){
    yDirection = -2
}

//user1 colisions
if(
(ballCurrentposition[0] >= player1Currentpostion[0]-10) &&
(ballCurrentposition[0] <= player1Currentpostion[0]) &&
(ballCurrentposition[1] >= player1Currentpostion[1]) &&
(ballCurrentposition[1]<= player1Currentpostion[1] +50)
){
    xDirection = 2
}

//user 2 colisions
if(
    (ballCurrentposition[0] >= player2Currentpostion[0]-10) &&
    (ballCurrentposition[0] <= player2Currentpostion[0]) &&
    (ballCurrentposition[1] >= player2Currentpostion[1]) &&
    (ballCurrentposition[1]<= player2Currentpostion[1] +50)
    ){
        xDirection = -2
    }

//wall colisions + score
if(ballCurrentposition[0]<=0){
    score2 +=1
    ballCurrentposition[0] += 300
    xDirection = 2
    console.log(score2)
}
if(ballCurrentposition[0]>=590){
    score1 +=1
    ballCurrentposition[0] -= 300
    xDirection = -2
    console.log(score1)
}



//check for win
if(score1>=10 || score2 >=10){

}

}

//set scores
function setScores(){
document.getElementById("score1").innerHTML = "User 1 Score:"+score1
document.getElementById("score2").innerHTML = "User 2 Score:"+score2

//check for win user 1
if(score1>=10){
    alert("user 1 wins")
    clearInterval(timerid)
    removeEventListener("keydown",moveUser2)
    removeEventListener("keydown",moveUser1)
    score1 = 0
}
//check for win user 2
if(score2>=10){
    alert("user 2 wins")
    clearInterval(timerid)
    removeEventListener("keydown",moveUser2)
    removeEventListener("keydown",moveUser1)
    score2 = 0
}

}




