let mainPlace = document.getElementById('square');
console.log('square grande');

document.getElementById('play').addEventListener('click', function(){
    console.log('clicked on play!');

    let levelGame = parseInt(document.querySelector('#inputGroupSelect04').value);
    console.log(levelGame);

    mainPlace.innerHTML = '';
    
    let boxNumber = 0;

    if(levelGame == 1){
        boxNumber = 100;
    } else if (levelGame == 2){
        boxNumber = 81;
    } else if (levelGame == 3){
        boxNumber = 49;
    }

    console.warn(boxNumber);
        
    const functionBoxes = (number) => {
        let smallBox = document.createElement('div');
        smallBox.classList.add('small-square');
        smallBox.innerHTML = `<span>${number}</span>`;
        return smallBox;
    };

    for (let i = 1; i <= boxNumber; i++) {
        let smallBox = functionBoxes(i);
        // console.log(i);
        smallBox.addEventListener('click', function(){
            this.classList.add('active');
        });
    
        mainPlace.appendChild(smallBox);
    }

    const bombs = generateBombs(16, boxNumber);
    console.log(bombs);

    function generateBombs(bombs, numberOfBox){
        const generateNumbers = [];
        for(i = 0; i < bombs; i++){
            generateNumbers.push(generateRandomNumber(generateNumbers, 1, numberOfBox));
        }
        return generateNumbers;
    }
    
    function generateRandomNumber(BlackList, min, max){
        let check = false;
        let randomInt;

        while(!check){
            randomInt = Math.floor(Math.random() * ((max + 1) - min) + min);

            if(!BlackList.includes(randomInt)){
                check = true;
            }

            return randomInt;
        }
    }


    
        

    

    

    

    
})
