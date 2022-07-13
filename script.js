const PICKS=['rock','paper','scrissors'];
const buttons = document.querySelectorAll(`button`);

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    return PICKS[i];
} 
function playRound(playerSelection, computerSelection){
    playerSelection = convert(playerSelection);
    let result;
    if (playerSelection === computerSelection)
        result = 'draw';
    else if (playerSelection === 'rock' && computerSelection ==='paper')
        result = 'you lost :(';
    else if (playerSelection === 'rock' && computerSelection ==='scrissors')
        result = 'you won :)';
    else if (playerSelection === 'paper' && computerSelection ==='scrissors')
        result = 'you lost :(';
    else if (playerSelection === 'paper' && computerSelection ==='rock')
        result = 'you won :)';
    else if (playerSelection === 'scrissors' && computerSelection ==='paper')
        result = 'you won :)';
    else if (playerSelection === 'scrissors' && computerSelection ==='rock')
        result = 'you lost :(';

    return result;
}
function game(){
    let scoreComputer=0,scorePlayer=0,computerPick,playerPick,result;
    for(i=0;i<5;i++){
        computerPick = computerPlay();
        playerPick = prompt('enter your pick fighter',computerPlay());
        result = playRound(playerPick,computerPick);
        if(result === 'you lost :(')
            scoreComputer++;
        else if(result === 'you won :)')
            scorePlayer++;
        console.log(result);
    }
    if((scorePlayer - scoreComputer) > 0)
        console.log('you won ;>');
    else if((scorePlayer - scoreComputer) < 0)
        console.log('you lost ;<');
    else 
        console.log('draw :|');


    return 0;   
}
function convert( value ){
    let converted = value.toLowerCase();
    return converted;
}
buttons.forEach(button => button.addEventListener('click', function(e){
    console.log(button.className);
    console.log(playRound(button.className,computerPlay()));
}))