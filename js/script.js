
myCode();

function myCode(){
    
    const btn = document.querySelector('button');
    const playground = document.getElementById('playground');
    const numeroBoxes = 64;

    btn.addEventListener('click', function(){

        for(let i = 1; i <= numeroBoxes; i++){
            let x = boxCreation(i);
            playground.append(x);
        }
    });

    function boxCreation(myBoxIndex){
        const myBox = document.createElement('div'); 
        myBox.classList.add('box');
        myBox.innerHTML = myBoxIndex;
        let radiceQ = Math.sqrt(numeroBoxes);
        myBox.style.width = `calc(100% / ${radiceQ})`;
        myBox.style.height = `calc(100% / ${radiceQ})`;
        myBox.addEventListener('click', function(){
            myBox.classList.add('onclick');
            myBox.style.color = 'black';
        });
        return myBox;

    }
    

};



