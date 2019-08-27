const buttons = document.querySelectorAll('button');//para que busque todos los botones 

let playnote = event => {
    console.log(event.target)
    const button = event.target;
    const note = button.dataset.note;
    console.log(`audio${note}`);
    const audio = document.getElementById(`audio${note}`);
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
   
);



