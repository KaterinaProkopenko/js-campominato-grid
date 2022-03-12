let mainPlace = document.getElementById('square');
console.log('square grande');

document.getElementById('play').addEventListener('click', function(){
    console.log('clicked on play!');

    let levelGame = parseInt(document.querySelector('#inputGroupSelect04').value);
    console.log(levelGame);

    mainPlace.innerHTML = '';
    
    let cellsPerRow;
    let boxNumber = 0;

    let points = 0;

    if(levelGame == 1){
        boxNumber = 100;
        cellsPerRow = 10;
    } else if (levelGame == 2){
        boxNumber = 81;
        cellsPerRow = 9;
    } else if (levelGame == 3){
        boxNumber = 49;
        cellsPerRow = 7;
    };

    console.warn(boxNumber);

    const bombs = generateBombs(16, boxNumber);
    console.log(bombs); 
      
    for (let i = 1; i <= boxNumber; i++) {
        const smallBox = functionBoxes(i, cellsPerRow);

        smallBox.addEventListener('click', function(){
            if (!bombs.includes(i)){
                this.classList.add('active');
                points++;
                writeInElementById('points', `Il tuo punteggio è: ${points}`);
            } else {
                this.classList.add('active-bomb');
                writeInElementById('points', `Mi dispiace, hai perso, il tuo punteggio è: ${points}`);
            }
        });

        mainPlace.appendChild(smallBox);
    };
});

const functionBoxes = (number, cellsPerRow) => {
    let smallBox = document.createElement('div');
    smallBox.classList.add('small-square');
    smallBox.style.width = `calc(100% / ${cellsPerRow})`;
    smallBox.style.height = smallBox.style.width;
    smallBox.innerHTML = `<span>${number}</span>`;
    return smallBox;
};

function generateBombs(bombs, numberOfBox){
    const generateNumbers = [];
    for(i = 0; i < bombs; i++){
        generateNumbers.push(generateRandomNumber(generateNumbers, 1, numberOfBox));
    }
    return generateNumbers;
};

function generateRandomNumber(BlackList, min, max){
    let check = false;
    let randomInt;

    while(!check){
        randomInt = Math.floor(Math.random() * ((max + 1) - min) + min);

        if(!BlackList.includes(randomInt)){
            check = true;
        };

        return randomInt;
    };
};

function writeInElementById(elementId, stringToWrite) {
    document.getElementById(elementId).innerHTML = stringToWrite;
};