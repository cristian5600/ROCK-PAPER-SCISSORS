const PICKS=['rock','paper','scrissors'];
const buttons = document.querySelectorAll(`button`);
const highligt = document.querySelectorAll('.select');
const title = document.querySelector(`.panel`);

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
/*function game(){
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
}*/
function decide(player,computer,rounds){
    if(player === 5)
        return `player won in ${rounds+1} rounds`;
    else if(computer === 5)
        return `computer won in ${rounds+1} rounds`;
    else 
        return 'continue';
    
}
function show(score1,score2){
    console.log("player:" + score1);
    console.log("computer:" + score2);
}

    let scoreComputer=0,scorePlayer=0,computerPick,playerPick,result,rounds=0;
    let logic = 0;
        buttons.forEach(button => button.addEventListener('click', function(e){
            computerPick = computerPlay();
            playerPick = button.className;
            result = playRound(playerPick,computerPick);
            highligt.forEach( function(x) {
                if(x.classList[0] === computerPick){
                    x.classList.add(`selected`)
                    setTimeout(function() {
                        x.classList.remove(`selected`);
                  }, 300);

                }
                
            })
       // title.textContent = result;
        if(result === 'you lost :(')   //calculating the result
            scoreComputer++;
        else if(result === 'you won :)')
            scorePlayer++;
        title.textContent = `${scorePlayer} - ${scoreComputer}`;
        show(scorePlayer,scoreComputer);
        if(decide(scorePlayer,scoreComputer,rounds) !== 'continue'){
            title.textContent = decide(scorePlayer,scoreComputer,rounds);
            alert(decide(scorePlayer,scoreComputer,rounds))
            scoreComputer =0;
            scorePlayer =0;
            rounds = 0;
        }
        else 
            rounds++;
    }))
 
        
        

function convert( value ){
    let converted = value.toLowerCase();
    return converted;
}
