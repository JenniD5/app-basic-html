const buttons = document.querySelectorAll('button');//para que busque todos los botones 


const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    //console.log(audioId);
    const audio = document.getElementById(audioId);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
   
);

const keyNoteDown = event =>
{
    console.log(event);//para que imprima el evento 
    const key= event.key;
    const button=document.querySelector(`button[data-key="${key}"]`)//los queryselector buscn etiquetas, en este cao que se equivalente al key 
    //con [] puedes buscar todo lo que tenga adentro 
     if(button) button.click(); //para cuando presiones un boton que no es o que no tiene funcion
}
document.addEventListener(`keydown`, keyNoteDown );//kateDown nombre del evento para buscar una tecla 




