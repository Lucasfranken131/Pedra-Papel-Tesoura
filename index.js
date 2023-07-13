let jogou;
function mudarComputador(){
    if(jogou == true){
        window.location.reload();
    }
    computer_image = document.getElementById('Image2');
    computer_choice = Math.floor(Math.random() * 3) + 1;
    if(computer_choice == 1){
        computer_image.src="imgs/rock.png";
    }
    else if(computer_choice == 2){
        computer_image.src="imgs/paper.png";
    }
    else{
        computer_image.src="imgs/scissors.png";
    }
    jogou = true;
    comecar = document.getElementById('Comecar');
    comecar.textContent = 'Jogar Novamente'
}

function Pedra(){
    var player = document.getElementById('Image');
    player.src="imgs/rock.png";
    seleciona();
}

function Papel(){
    var player = document.getElementById('Image'); 
    player.src="imgs/paper.png";
    seleciona();
}

function Tesoura(){
    var player = document.getElementById('Image'); 
    player.src="imgs/scissors.png";
    seleciona();
}

function seleciona(){
    comecar = document.getElementById('Comecar');
    comecar.disabled = false;
    var Pedra = document.getElementById('Pedra');
    var Papel = document.getElementById('Papel')
    var Tesoura = document.getElementById('Tesoura');
    Pedra.disabled = true;
    Papel.disabled = true;
    Tesoura.disabled = true;
}