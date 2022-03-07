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
        const createBoxes = document.createElement('div');
        createBoxes.classList.add('small-square');
        return createBoxes;
    };

   
    
    for (let i = 1; i <= boxNumber; i++) {
        const smallBox = functionBoxes(i);
        // console.log(i);
        smallBox.addEventListener('click', function(){
            this.classList.add('active');
        });
    
        mainPlace.appendChild(smallBox);
    }

    
        

    

    

    

    
})
