var sprites = {
    //Sprites juego  
	MonCamino: { sx: 0, sy: 90, w: 90, h: 90, frames: 2}, 
	MonGranja: { sx: 0, sy: 90, w: 90, h: 90, frames: 3}, 
	CiudadC: { sx: 0, sy: 0, w: 90, h: 90, frames: 0}, 
	CiudadD: { sx: 0, sy: 90, w: 90, h: 90, frames: 7},
	CiudadE: { sx: 0, sy: 0, w: 90, h: 90, frames: 9},
	CiudadF: { sx: 0, sy: 0, w: 90, h: 90, frames: 6},
	CiudadG: { sx: 0, sy: 0, w: 90, h: 90, frames: 5}, 
	CiudadH: { sx: 0, sy: 90, w: 90, h: 90, frames: 1}, 
	CiudadI: { sx: 0, sy: 90, w: 90, h: 90, frames: 0}, 
	CiudadJ: { sx: 0, sy: 90, w: 90, h: 90, frames: 4},  
	CiudadK: { sx: 0, sy: 90, w: 90, h: 90, frames: 5},
	CiudadL: { sx: 0, sy: 90, w: 90, h: 90, frames: 6},
	CiudadM: { sx: 0, sy: 0, w: 90, h: 90, frames: 8}, 
	CiudadN: { sx: 0, sy: 0, w: 90, h: 90, frames: 7},
  	CiudadO: { sx: 0, sy: 180, w: 90, h: 90, frames: 3},
	CiudadP: { sx: 0, sy: 180, w: 90, h: 90, frames: 2},
	CiudadQ: { sx: 0, sy: 0, w: 90, h: 90, frames: 2},  
	CiudadR: { sx: 0, sy: 0, w: 90, h: 90, frames: 1},
	CiudadS: { sx: 0, sy: 0, w: 90, h: 90, frames: 4}, 
	CiudadT:{ sx: 0, sy: 0, w: 90, h: 90, frames: 3},
	Recto: { sx: 0, sy: 180, w: 90, h: 90, frames: 0}, 
	Curva: { sx: 0, sy: 180, w: 90, h: 90, frames: 1}, 
	Cruce3: { sx: 0, sy: 90, w: 90, h: 90, frames: 9}, 
	Cruce4: { sx: 0, sy: 90, w: 90, h: 90, frames: 8}, 
	
	//Fondo
	Fondo: { sx: 0, sy: 270, w: 90, h: 90, frames: 0}, 
	BackSide: { sx: 0, sy:180, w: 90, h: 90, frames: 4},
	Rejilla: {sx: 0, sy:450, w: 90, h: 90, frames: 0},

	// Rojos
	AldeanoRojo: {sx:451, sy:181, w:36, h:30, frames : 0},
	CuraRojo: {sx:450.5, sy:181, w:36, h:30, frames : 1},
	CaballeroRojo: {sx:450, sy:181, w:36, h:30, frames : 2},
	GranjeroRojo: {sx:451, sy:181, w:36, h:30, frames : 3},
	LadronRojo: {sx:450, sy:181, w:36, h:30, frames : 4},

	// Azules
	AldeanoAzul:{sx:451, sy:211, w:36, h:30, frames:0},
	CuraAzul: {sx:450.5, sy:211, w:36, h:30, frames : 1},
	CaballeroAzul: {sx:450, sy:211, w:36, h:30, frames : 2},
	GranjeroAzul: {sx:451, sy:211, w:36, h:30, frames : 3},
	LadronAzul: {sx:450, sy:211, w:36, h:30, frames : 4},	


	// Amarillos
	AldeanoAmarillo:{sx:451, sy:241, w:36, h:30, frames:0},
	CuraAmarillo: {sx:450.5, sy:241, w:36, h:30, frames : 1},
	CaballeroAmarillo: {sx:450, sy:241, w:36, h:30, frames : 2},
	GranjeroAmarillo: {sx:451, sy:241, w:36, h:30, frames : 3},
	LadronAmarillo: {sx:450, sy:241, w:36, h:30, frames : 4},

	// Verdes
	AldeanoVerde:{sx:451, sy:271, w:36, h:30, frames:0},
	CuraVerde: {sx:450.5, sy:271, w:36, h:30, frames : 1},
	CaballeroVerde: {sx:450, sy:271, w:36, h:30, frames : 2},
	GranjeroVerde: {sx:451, sy:271, w:36, h:30, frames : 3},
	LadronVerde: {sx:450, sy:271, w:36, h:30, frames : 4},

	// Negros
	AldeanoNegro:{sx:451, sy:301, w:36, h:30, frames:0},
	CuraNegro: {sx:450.5, sy:301, w:36, h:30, frames : 1},
	CaballeroNegro: {sx:450, sy:301, w:36, h:30, frames : 2},
	GranjeroNegro: {sx:451, sy:301, w:36, h:30, frames : 3},
	LadronNegro: {sx:450, sy:301, w:36, h:30, frames : 4},

	// Rosas
	AldeanoRosa:{sx:451, sy:331, w:36, h:30, frames:0},
	CuraRosa: {sx:450.5, sy:331, w:36, h:30, frames : 1},
	CaballeroRosa: {sx:450, sy:331, w:36, h:30, frames : 2},
	GranjeroRosa: {sx:451, sy:331, w:36, h:30, frames : 3},
	LadronRosa: {sx:450, sy:331, w:36, h:30, frames : 4},	


	//Numeros
	num0: { sx: 0, sy: 360, w: 90, h: 90, frames: 0},
	num1: { sx: 0, sy: 360, w: 90, h: 90, frames: 1},
	num2: { sx: 0, sy: 360, w: 90, h: 90, frames: 2},
	num3: { sx: 0, sy: 360, w: 90, h: 90, frames: 3},
	num4: { sx: 0, sy: 360, w: 90, h: 90, frames: 4},
	num5: { sx: 0, sy: 360, w: 90, h: 90, frames: 5},
	num6: { sx: 0, sy: 360, w: 90, h: 90, frames: 6},
	num7: { sx: 0, sy: 360, w: 90, h: 90, frames: 7},
	num8: { sx: 0, sy: 360, w: 90, h: 90, frames: 8},
    num9: { sx: 0, sy: 360, w: 90, h: 90, frames: 9},
};


var startGame = function() {
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",50,315,playGame));
  	
}


var playGame = function() {
 	
	var gb = new GameBoard();
	var p1 = new points(125,"ALBERTO",830,300,"AldeanoRojo",5);
	var p2 = new points(300, "JONA",830,350,"AldeanoNegro",5);
	var p3 = new points(997, "MORATA",830,400,"AldeanoAzul",5);
	
	Game.setBoard(1,gb);
	Game.setBoard(2,p1);
	Game.setBoard(3,p2);
	Game.setBoard(4,p3);
	Game.setBoard(5,new carta(card));
}


var card = function(){
	Game.setBoard(6,new NewCard());
}


var NewCard = function (){


	var ran = Math.floor((Math.random() * 23) + 1);
	var sp;
	var cont = 0;
	var gb = Game.boards[1];
	var grade = 0;
	var entro = false;

	
	for (key in sprites) {
		if(cont == ran){
			sp = key;
			break;
		}
		cont++;
	}
	

	this.x = 850;
	this.y = 530;

    this.draw = function(ctx) {
		SpriteSheet.draw(Game.ctx,sp,this.x,this.y,grade);
    };

   this.step = function() {
	    var that = this;	

		window.onmousedown = function(e){
			if(e.which == 1){
				mX = e.pageX;
				mY = e.pageY;

				cX = Math.floor((mX-100)/90);
				cY = Math.floor((mY-100)/90);
	
				if((mX > 100) && (mX < 910) && (mY > 190) && (mY < 730) && (entro == false)){

					for(i = 0 ; i < gb.lista_fichas.length ; i++){
						var f = gb.lista_fichas[i];
						if( (f.x == cX*90+gb.scrollx*90) && (f.y == cY*90+gb.scrolly*90) && (f.paint == false)){
							f.paint = true;
							f.sprite = sp;
							f.grade = grade;
							entro = true;

							Game.setBoard(6,new Colocar(f));
						}
					}
						
				}
			}else{
				grade = grade + 90;
			}
		}
    };									

}
	

var points = function(number,name,x,y,sprite,num_alde){
	
	var num = number;
	var cont = 0;

	this.step = function() {
			cont++;
			if(cont == 100){
				num += 1;
				cont = 0;
			}
	};

//array = number.toString();
	this.draw = function(ctx) {
		ctx.fillStyle = "white";
		ctx.fillRect(x-2,y-20,350,50);
		ctx.fillStyle = "#000000";
		ctx.font = "20px Verdana";
		ctx.fillText(name + ": " ,x,y);
		Num_To_Sprite(num,x+120,y-20);

		ctx.fillStyle = "#000000";
		ctx.font = "20px Verdana";
		ctx.fillText(num_alde,x+280,y);
		SpriteSheet.draw(Game.ctx,sprite,x+300,y-20,0,true);
    };

}



var Colocar = function Colocar(obj){
	var f = obj;
	var up = false;

	this.step = function() {
		if(!Game.keys['uno'] && !Game.keys['dos'] && !Game.keys['tres'] && !Game.keys['cuatro'] && !Game.keys['cinco'] && !Game.keys['seis']
		&& !Game.keys['siete'] && !Game.keys['ocho'] && !Game.keys['nueve']){
				up = true;
		}

		
		for(i = 1 ; i < 10; i++){
			if(up &&  Game.keys[""+ i]){
				f.pos = i;
				Game.setBoard(6,new carta(card));
				up = false;
			}	
		}

		

	};

	this.draw = function(ctx) {
			f.rejilla = true;
	};

}




$(function() {
	document.oncontextmenu=new Function("return false");
    Game.initialize("game",sprites,startGame);
});





//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////Esta es nuestra parte///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////











// Lós metodos van dentro de Meteor.methods ya que utilizamos Meteor para desarrollar el juego

var ArrPartidas = {} // En esta coleccion guardamos las id de todas las partidas


Meteor.methods({
	//Crea una nueva partida, devuelve true si se consiguio false si no
	nuevaPartida: function(id_game){
		if(ArrPartidas[id_game]== undefined){
			Partida = new Tablero(id_game);
			ArrPartidas[id_game]= Partida;
			return true;
		}else{
			console.log("Esa id ya pertenece a una partida creada");
			return false;
		}
	},

	//Los jugadores se añaden de uno en 1 y solo se podran meter en partidas ya creadas devuelve true si se consiguio, false si no
	
	/*Se comprueba que la partida tiene menos de 5 jugadores entre las IAS y los jugadores reales, se devuelve false si
	  el numero excede el maximo. Se devuelve la lista de jugadores si es correcto. Ademas elige aleatoriamente quien
	  comienza el juego */
	comenzar: function(id_game,jugadores,nIAs){
		if(ArrPartidas[id_game]){
			Partida= ArrPartidas[id_game];
			if(jugadores.length+nIAs<=5)
			{
			    for (i = 0; i < jugadores.length; i++)
			    {
					Partida.listaJugadores.push(new Jugador(jugadores[i][0],jugadores[i][1])); //El 0 es la id el 1 es el nombre
				}
				for(i=1;i<=nIAs;i++){
					Partida.listaJugadores.push(new Jugador(-i,"IA"+i)); 
					Partida.listaJugadores[Partida.listaJugadores.length + i].IA = true;//Añado el Nuevo ID DE LA IA, para ello agregamos el .IA a true en los ultimos que hemos añadido
				}
				Partida.turno = Math.floor(Math.random()*(Partida.listaJugadores.length-1));
				return Partida.listaJugadores;
			}
			else{
				console.log("Excede el numero maximo de jugadores");
				return false;
			}
		}
	},


	//Roba una ficha, si id = id_game es un juego existente, devuelve la ficha
	// y las posicones donde se pueden colocar, si no devuelve false, si no quedan piezas que extraer devuelve undefined
	robarFicha: function(id_game){
		if(ArrPartidas[id_game]){
			Partida = ArrPartidas[id_game];
			ficha = Partida.saca_pieza();
			lugares = Partida.posiblelugar(ficha);
			var resultado = [ficha,lugares];
			return resultado;
		}else{
			return false;
		}
	},
	

	//Devuelve el turno en el que se encuentra la partida con id = id_game, si no existe devuelve undefined
	turnoActual: function(id_game){
		if(ArrPartidas[id_game]){
			return ArrPartidas[id_game].turno
		}else{
			return undefined;
		}
	},
	
	//Pasa al siguiente turno de la partida id = id_game, devuelve el turno siguiente y si no existe esa partida devuelve undefined
	cambiarTurno: function(id_game){
		if(ArrPartidas[id_game]){
			Partida = ArrPartidas[id_game];
			if(Partida.turno===Partida.listaJugadores.length-1){
				Partida.turno=0;
			}else{
				Partida.turno++;
			}
			return Partida.turno;
		}else{
			return undefined;
		}
	},

	//Coloca una ficha en una posición, devuelve la lista de posiciones donde se puede colocar un seguidor si se ha conseguido, 0 en caso de que no se pueda
	colocarFicha: function (id_game, pieza, posicion, giros, id_jugador) {
	    if (ArrPartidas[id_game]) {
	        var encaja = false;
			Partida = ArrPartidas[id_game];
			//giro la pieza
			for(i=0;i<giros;i++){
				pieza= pieza.girar();
			}
			//El if comprueba que la posicion este dentro de las posibles posicones donde podemos colocar
			if(Partida.posiblelugar(pieza).indexof(posicion)<=0){
				encaja = Partida.coloco(pieza);
			}
			if (encaja == false) { return 0 }
			var seguidores = [];
			var jugador = _.find(Partida.listaJugadores, function (obj) { return (obj.id.user_id == id_jugador) })
			if (jugador.seguidores != 0) {
			    var seguidores = Partida.posibleseguidor(pieza);
			}
			ArrPartidas[id_game] = Partida;
			return seguidores;

		}else{
			return undefined;
		}
	},
	
	finalizarPartida: function (id_game)
	{
	    if (ArrPartidas[id_game]) {
	        var puntuacion = [];
            Partida= ArrPartidas[id_game];
            for(var i =0; i< Partida.posiciones.length; i++)
            {
                pieza = Partida.posiciones[i];
                	if (pieza.seguidores.length != 0){
					 		
						if (_.find(pieza.seguidores,function(obj){return (obj.tipo=="Granjero")})){cerrarGranja(pieza,true,Partida);}
                        if (_.find(pieza.seguidores,function(obj){return (obj.tipo=="Ladron")})){cerrarCamino(pieza,true,Partida);}
						if (_.find(pieza.seguidores,function(obj){return (obj.tipo=="Monje")})){cerrarMonasterio(pieza,true,Partida);}
                        if (_.find(pieza.seguidores,function(obj){return (obj.tipo=="Caballero")})){cerrarCiudad(pieza,true,Partida);}
                        }
            }
    	for (i=0; i< Tablero.listaJugadores.length; i++){
			puntuacion.push({user_id: Partida.listaJugadores[i].id.user_id, puntos: Partida.listaJugadores[i].puntos});
		}

	    } else {
	        return undefined;
	    }


	},

	colocarSeguidor: function (id_game, id_jugador, posicion, seguidor) {
	    if (ArrPartidas[id_game]) {
	        Partida = ArrPartidas[id_game];
	        var pieza = Partida.piezaenposiciones(posicion.x, posicion.y);
	        if (seguidor > 0)
	        {
	           var colocado = Partida.colocarseguidor(pieza, seguidor);
	        }
	        cerrarMonasterio(pieza,false,Partida); //Metodo que llama para mirar si es cierre Monasterio
	        ArrPartidas[id_game] = Partida;
	        return Partida.listaJugadores;

	    } else {
	        return undefined;
	    }
	},

	eliminarPartida: function(id_game){
		if(ArrPartidas[id_game]){
			delete ArrPartidas[id_game];
		}else{
			console.log("Partida no encontrada");
		}
	},

    JugadorArtificial: function(id_partida,id_jugador){
        Tablero = ArrPartidas[id_partida];
        
        var ColocoFicha = false;
        while (ColocoFicha == false)
        { //Bucle en el cual probamos a colocar las fichas, Robamos con la clase JUGADORIA, y la colocamos, no podemos, tendremos que volver a robar otra ficha y realziar el mismo proceso.
            var Jugada = jugadorIA(id_jugador);
            var Piezanueva = new Pieza(0, 0, 0, x[0]);
            for (var i = 0; i < Jugada[1].giros; i++) {
                Piezanueva = Piezanueva.girar()
            }
            ColocoFicha = Tablero.coloco(Piezanueva, Jugada[1].coorx, Jugada[1].coory);
            console.log("¿Ha sido Colocada?", ColocoFicha);
        }
        var nuevoSeguidor = {tipoSeguidor:undefined, PosEnFicha:undefined, IdJugador:undefined, TipoFicha:undefined}
        var jugador = _.find(Tablero.listaJugadores, function (obj) { return (obj.id.user_id == id_jugador) })
        if (jugador.seguidores > 0)
        {
            if (ColocoFicha.tipo == "MonCamino" || ColocoFicha.tipo == "MonGranja")
            {
                nuevoSeguidor = { tipoSeguidor: "monje", PosEnFicha: 5, IdJugador: jugador.id, TipoFicha: ColocoFicha }
                Tablero.colocarseguidor(ColocoFicha, nuevoSeguidor.PosEnFicha);
            }
            else
            {
                var posiciones = posibleseguidor(ColocoFicha);
                if (posiciones.length > 0)
                {
                    var Pos_Aleatorio = Math.floor(Math.random() * posiciones.length);
                    seguidor = posiciones[Pos_Aleatorio];
                    nuevoSeguidor = { tipoSeguidor: seguidor.tipo, PosEnFicha: seguidor.posicion, IdJugador: jugador.numero, TipoFicha: fichaColocada }
                    Tablero.colocarseguidor(ColocoFicha, nuevoSeguidor.PosEnFicha);
                }
            }
        }
        // CierroCamino(ColocoFicha);
        // CierroMonasterio(colocando);
        // CierroCiudad(ColocoFicha);
        ArrPartidas[id_partida] = Tablero;
        return [Piezanueva.tipo, jugador[1].giros, jugador[1].coorx, jugador[1].coory, Tablero.listaJugadores, nuevoSeguidor.tipoSeguidor, nuevoSeguidor.PosEnFicha]
    }
});
