let randomNum = 0;
let humanScore = 0;
let computerSore = 0;
let showText;
let restarFlag = 0;

const userHand = document.querySelector(".UserHand");
const PlayerScore = document.querySelector("#PlayerScore");
const ComputerScore = document.querySelector("#ComputerScore");
const PlayerHand = document.querySelector("#PlayerHand");
const ComputerHand = document.querySelector("#ComputerHand");
const Winner = document.querySelector("#status");



const newbtn = document.createElement("button");
newbtn.textContent = "再玩一次~";
newbtn.classList.toggle("restarBtn");



newbtn.addEventListener("click", function restar(e){
    Winner.textContent = "來玩猜拳吧！先贏 5 次的贏！";
    ComputerHand.textContent = "";
    PlayerHand.textContent = "";
    computerSore = 0;
    humanScore = 0;
    restarFlag = 0;
    showScrore();
    this.parentNode.removeChild(this);
})



function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    console.log("computer Choice = " + computerChoice);
    return computerChoice;
}


userHand.addEventListener("click", function getHumanChoice(e) {

    let userInput = "";

    let HumanChoice = 3;

    if ((e.target.getAttribute("class") == "emoji") || (e.target.getAttribute("class") == "btu_text")) {
        userInput = e.target.parentNode.id;
    }
    else {
        userInput = e.target.id;
    }
    if (userInput == "s") {
        HumanChoice = 0;
    }
    else if (userInput == "r") {
        HumanChoice = 1;
    }
    else if (userInput == "p") {
        HumanChoice = 2;
    }

    let ComputerChoic = getComputerChoice();
    playRound(ComputerChoic, HumanChoice);
});



function playRound(ComputerChoic, HumanChoice) {
    if(restarFlag == 1)
    {
        return;
    }


    if (ComputerChoic == 0 && HumanChoice == 0) { //"平手"" "電腦：剪刀 玩家：剪刀
        PlayerHand.textContent = "✌";
        ComputerHand.textContent = "✌";
        setWinner();
    }
    else if (ComputerChoic == 1 && HumanChoice == 1) { //"平手"" "電腦：石頭 玩家：石頭
        PlayerHand.textContent = "✊";
        ComputerHand.textContent = "✊";
        setWinner();
    }
    else if (ComputerChoic == 2 && HumanChoice == 2) { //"平手"" "電腦：布 玩家：布
        PlayerHand.textContent = "🖐";
        ComputerHand.textContent = "🖐";
        setWinner();
    }
    else if (ComputerChoic == 2 && HumanChoice == 0) { //玩家獲勝" "電腦：布 玩家：剪刀
        humanScore++;
        PlayerHand.textContent = "✌";
        ComputerHand.textContent = "🖐";
        setWinner();
    }
    else if (ComputerChoic == 0 && HumanChoice == 2) { //電腦獲勝" "電腦：剪刀 玩家：布
        computerSore++;
        PlayerHand.textContent = "🖐";
        ComputerHand.textContent = "✌";
        setWinner();
    }
    else if (ComputerChoic == 1 && HumanChoice == 0) { //電腦獲勝" "電腦：石頭 玩家：剪刀
        computerSore++;
        PlayerHand.textContent = "✌";
        ComputerHand.textContent = "✊";
        setWinner();
    }
    else if (ComputerChoic == 0 && HumanChoice == 1) { //玩家獲勝" "電腦：剪刀 玩家：石頭
        humanScore++;
        PlayerHand.textContent = "✊";
        ComputerHand.textContent = "✌";
        setWinner();
    }
    else if (ComputerChoic == 2 && HumanChoice == 1) { //電腦獲勝" "電腦：布 玩家：石頭
        computerSore++;

        PlayerHand.textContent = "✊";
        ComputerHand.textContent = "🖐";
        setWinner();
    }
    else if (ComputerChoic == 1 && HumanChoice == 2) { //玩家獲勝" "電腦：石頭 玩家：布
        humanScore++;
        PlayerHand.textContent = "🖐";
        ComputerHand.textContent = "✊";
        setWinner();
    }
    showScrore();

}

function showScrore() {
    PlayerScore.textContent = `玩家${humanScore}分`;
    ComputerScore.textContent = `電腦${computerSore}分`;
}

function setWinner() {

    

    if (humanScore >= 5) {
        Winner.textContent = "玩家獲勝";
        Winner.appendChild(newbtn);
        restarFlag = 1;
    }
    else if (computerSore >= 5 ) {
        Winner.textContent = "電腦獲勝";
        Winner.appendChild(newbtn);
        restarFlag = 1;
    }
    else{
        Winner.textContent = "加油！";
    }


}
