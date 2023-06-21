//Criar uma referência para tela
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
greencar_Width= 75;
greencar_Height= 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_X=5;
greencar_Y=225;

function add() {
	//carregar carro e imagens de fundo na tela.
	backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;

    greencarImgTag=new Image();
    greencarImgTag.onload=uploadGreenCar;
    greencarImgTag.src=greencarImage;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencarImgTag,greencar_X,greencar_Y,greencar_Width,greencar_Height)
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencar_Y>=0){
		greencar_Y=greencar_Y-10;
		console.log( "Quando a seta para cima é pressionada, x = " + greencar_X + " | y = " + greencar_Y );
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_Y<=500){
		greencar_Y=greencar_Y+10;
		console.log( "Quando a seta para baixo é pressionada, x = " + greencar_X + " | y = " + greencar_Y );
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_X>=0){
		greencar_X=greencar_X-10;
		console.log( "Quando a seta para esquerda é pressionada, x = " + greencar_X + " | y = " + greencar_Y );
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_X<=700){
		greencar_X=greencar_X+10;
		console.log( "Quando a seta para direita é pressionada, x = " + greencar_X + " | y = " + greencar_Y );
		uploadBackground();
		uploadGreenCar();
	}
}
