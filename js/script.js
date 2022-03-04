const mainPlace = document.getElementById('square');
console.log('square grande');

const functionBoxes = () => {
    const createBoxes = document.createElement('div');
    createBoxes.classList.add('small-square');
    return createBoxes;
};

for (let i = 0; i < 100; i++) {
    const smallBox = functionBoxes();
    console.log(smallBox);

    smallBox.addEventListener('click', function(){
    this.classList.add('active');
    });

    mainPlace.append(smallBox);
}














/* //chiamo il quadrato


document.querySelector('button').addEventListener('click', function(){
    const mainPlace = document.getElementById('square');
   //creo una funziona che crea quadratti piccoli
   const functionBoxes = () => {
       const createBoxes = document.createElement('div');
       createBoxes.classList.add('small-square');
       return createBoxes;
    };



    const input = document.getElementById('level').value;
    if (input == 'Easy') {
        for (let i = 0; i < 100; i++) {
            const smallBox = functionBoxes();

            smallBox.addEventListener('click', function(){
            this.classList.add('active');
            });

            mainPlace.append(smallBox);
        }

    } else if (input == 'Medium') {
        for (let i = 0; i < 81; i++) {
            const smallBox = functionBoxes();

            smallBox.addEventListener('click', function(){
            this.classList.add('active');
            });

            mainPlace.append(smallBox);
        }

    } else if ( input == 'Hard') {
        for (let i = 0; i < 49; i++) {
            const smallBox = functionBoxes();

            smallBox.addEventListener('click', function(){
            this.classList.add('active');
            });

            mainPlace.append(smallBox);
        }
    };
}); */