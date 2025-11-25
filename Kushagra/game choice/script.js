

let roundCount=0;
let correctAnswer=0;
let scoreA=0;
let scoreB=0;
function nextQuestion(){
    if(roundCount>=10){
        document.getElementById("final-result").innerHTML=`<h2>Game Over! Final Scores — Team A: ${scoreA}, Team B: ${scoreB}</h2>`+
        winnerMessage();
        return;
    }
    let num1=Math.floor(Math.random()*10);
    let num2=Math.floor(Math.random()*10);
    let operators=['+','-','*','/'];
    let operator= operators[Math.floor(Math.random() * operators.length)];
    if(operator==='+'){
        correctAnswer=num1+num2;
    }
    else if(operator==='-'){
        correctAnswer=num1-num2;
    }   
    else if(operator==='*'){
        correctAnswer=num1*num2;
    }
    else if(operator==='/'){
        correctAnswer=(num1/num2).toFixed(2);
    }
    roundCount++;
    document.getElementById("count").textContent=roundCount;

    document.getElementById("questions").innerHTML=`<h2>What is ${num1} ${operator} ${num2} ?</h2>`;
    document.getElementById("round-result").textContent="";
    document.getElementById("teamA").value="";
    document.getElementById("teamB").value="";

}
function submitA(){
    let ans = document.getElementById("teamA").value.trim();
    if(ans===""){
        alert("please enter a number!");
        return;
    }
    if(parseInt(ans)===correctAnswer){
        scoreA++;
        document.getElementById("scoreA").textContent=scoreA;
        document.getElementById("round-result").textContent+="Team A answered correctly! ";
    }else{
        document.getElementById("round-result").textContent+="Team A got incorrectly !"
    }
}
function submitB(){
    let ans = document.getElementById("teamB").value.trim();
    if(ans===""){
        alert("please enter a number !");
        return;
    }
    if(parseInt(ans)===correctAnswer){
        scoreB++;
        document.getElementById("scoreB").textContent=scoreB;
        document.getElementById("round-result").textContent+= "Team B answered correctly!";
        
    }else{
        document.getElementById("round-result").textContent+="Team B got incorrect answer !";
    }
}

function winnerMessage(){
    if(scoreA>scoreB){
        return "<h2>Team A wins the game!</h2>";
    }
    if(scoreB>scoreA){
        return "<h2>Team B wins the game!</h2>";
    }
    else{
        return "<h2>The game is a tie!</h2>";
    }
}
















