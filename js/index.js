 var carbs=15;
 var cantidadPorciones=1;
 var productos = ["Aguacate", "Babaco", "Badea", "Banano", "Capuli", "Cereza", "Chirimoya", "Ciruela pasa", "Claudia", "Durazno", "Frambuesa", "Fruta China", "Frutillas", 
 "Granadilla", "Grosella", "Guaba","Guanabana", "Guayaba nacional", "Higo", "Kiwi", "Lima", "Limón meyer", "Mamey", "Mandarina", "Mango", "Manzana", "Maracuya", 
 "Melón", "Moras", "Mortiño", "Naranja", "Naranjilla", "Orito", "Papaya", "Pepino", "Pera", "Piña", "Pitahaya", "Sandia", "Tamarindo", "Taxo", "Tomate de arbol", 
 "Toronja", "Tuna", "Uvas", "Uvillas", "Coco fresco", "Coco seco rallado","Arroz","Arveja tierna","Avena Hojuejas","Bolón de verde","Canguil","Choclo","Choclo desgranado",
 "Empanada","Frejol","Galletas Saltinas","Garbanzo","Granola","Granos tiernos","Habas con cáscara","Harina","Lenteja","Maduro","Maicena","Mote","Pan de molde","Pan de yuca",
 "Pan integral","Pan redondo","Pancake","Papa","Pasta, Fideo","Pastel sin cubierta","Pure de papa","Quinua cruda","Sushi rollo california","Sopa tipo crema","Tortilla de trigo",
 "Tortillas de maíz","Tostado","Verde","Yuca","Zanahoria blanca","Leche","Leche semidescremada","Leche evaporada","Leche en polvo","Leche condensada","Leche de soya",
 "Helado de vainilla","Yogurt natural","Yogurt light","Atún","Camarón","Carne blanca","Carne de res magra","Carne molida","Corvina / merzula","Higado","Huevo",
 "Jamón","Mariscos","Pechuga de pollo","Salchicha","Queso fresco","Queso mozzarella","Requesón","Calamar","Aceituna verde","Ajonjoli","Almendra","Ciruela pasa seca",
 "Maní / cacahuate","Nueces","Pasas","Pepas de sambo","Azucar blanca","Azucar morena","Cocoa sin azucar","Fructosa en polvo","Mermelada","Miel de abeja","Miel de maple",
 "Mostaza","Salsa de tomate","Salsa de soya","Vegetales cocinados","Vegetales crudos","Ajo ","Alcachofas","Apio","Berenjena","Brócoli","Cebolla blanca","Cebolla perla",
 "Champiñon","Col","Col de bruselas","Coliflor","Espárragos","Espinaca / acelga","Lechuga","Pepinillo","Pimiento verde","Rábano","Remolacha","Tomate","Zanahoria","Zapallo",
 "Agua de coco","Avena colada casera","Bebida gaseosa, cola","Cola light","Jugo con agua","Jugo puro","Vino","Cerveza","Cerveza Light","Aceite","Crema de leche","Mantequilla",
 "Mayonesa"];
 var imagenes = ["aguacate.jpg", "babaco.jpg", "badea.jpg", "banano.jpg", "capuli.jfif", "cereza.jpg", "chirimoya.jpg", "ciruela.jfif", "claudia.jpg", 
 "durazno.jpg", "frambuesa.jfif", "frutachina.jfif", "frutillas.jpg","granadilla.jpg", "grosella.jpg", "guaba.jfif", "guanabana.jpg", "guayaba.jpg", 
 "higo.jpg", "kiwi.jpg","lima.jpg", "limon.jpg", "mamey.jfif", "mandarina.jpg", "mango.jfif", "manzana.jpg", "maracuya.jpg", "melon.jpg", "moras.jpg", "mortino.jpg",
 "naranja.jpg", "naranjilla.jpg", "orito.jfif", "papaya.jpg", "pepinodulce.jpg", "pera.jpg", "pina.jpg", "pitahaya.jpg", "sandia.jpg", "tamarindo.jpg", "taxo.jpg", 
 "tomatearbol.jpg", "toronja.jpg", "tuna.jpg", "uvas.jpg", "uvillas.jpg", "coco.jpg", "cocorallado.jpg",
 'arroz.jpg','arverjas.jpg','avena.jpg','bolon.jpg','canguil.jpg','choclo.png','choclodesgranado.jpg','empanda.jpg','frejol.jpg','galletas.jpg','garbanzo.jpg','granola.jpg',
 'granostiernos.png','habas.jpg','harina.jpg','lenteja.jpg','maduro.jfif','maicena.jpg','mote.jpg','panmolde.jpg','pandeyuca.jpg','panintegral.jpg','panredondo.jpg','pancake.jpg',
 'papas.jpg','pasta.jpg','pastel.jpg','purepapa.jpg','quinua.jpg','sushi.jpg','sopacrema.jpg','tortillatrigo.jpg','tortillas.jpg','tostado.jpg','verde.jpg','yuca.jpg',
 'zanahoriablanca.jpg','leche.jpg','lechesemi.jpg','lecheevaporada.jpg','lechepolvo.jpg','lechecondensada.jpg','lechesoya.jpg','heladovainilla.jpg','yogurtnatural.jpg',
 'yogur.jfif','atun.jpg','camaron.jpg','carneblanca.jfif','carneres.jpg','carnemolida.jpg','corvina.jpg','higado.jpg','huevo.jpg','jamon.jpg','mariscos.jpg',
 'pechugapollo.jpg','salchicha.jpg','quesofresco.jpg','mozzarella.jpg','requeson.jfif','calamar.jpg','aceituna.jfif','ajonjoli.jpg','almendra.jpg','ciruelapasa.jfif',
 'mani.jpeg','nueces.jpg','pasas.jpg','pepassambo.jpg','azucar.jpg','azucarmorena.jpg','cocoa.jpg','fructosa.jpg','mermelada.jpg','miel.jfif','maple.jfif','mostaza.jpg',
 'ketchup.jfif','salsasoya.jpg','vegetalescocidos.jpg','vegetalescrudos.jfif','aj.jpg','alcachofa.jfif','apio.jpg','berenjena.jpg','brocoli.jfif','cebollablanca.jpg',
 'cebollaperla.jpg','champinones.jfif','col.jpg','colbruselas.jpg','coliflor.jfif','esparrago.jfif','espinaca.jpg','lechuga.jpg','pepinillo.jfif','pimiento.jfif','rabano.jpg',
 'remolacha.jpg','tomate.jpg','zanahoria.jpg','zapallo.jfif','aguacoco.jpg','avenacolada.jpg','colas.jpg','colalight.jfif','jugoagua.jpg','jugopuro.jpg','vino.jpg','cerveza.jpg',
 'cervezalight.jpg','aceite.jfif','cremadeleche.jpg','mantequilla.jfif','mayonesa.jpg'];
 var descripcion = ["Medio (1/2) aguacate (180gr) = 1 porción es 15gr de CHO", "Taza de Babaco (100gr) = 1 porción es 15gr de CHO", 
 "Taza de Badea en pedazos (100gr) = 1 porción es 15gr de CHO", "Medio (1/2) banano sin cascara pequeño (65gr) = 1 porción es 15gr de CHO",
 "15-20 unidades de capulies (100gr) = 1 porción es 15gr de CHO", "10-15 unidades de cerezas (120gr) = 1 porción es 15gr de CHO", 
 "Cuarto (1/4) de Chirimoya (75gr) = 1 porción es 15gr de CHO", "Tres unidades de ciruelas pasas (25gr) = 1 porción es 15gr de CHO", 
 "Dos reinas claudias (120gr) = 1 porción es 15gr de CHO", "Durazno mediano (110gr) = 1 porción es 15gr de CHO", 
 "Taza de frambuesas (125gr) = 1 porción es 15gr de CHO", "Dos frutas chinas (150gr) = 1 porción es 15gr de CHO", 
 "Taza o unas 12 unidades (180gr) = 1 porción es 15gr de CHO", "Granadilla (96gr) = 1 porción es 15gr de CHO", 
 "Taza de grosellas (100gr) = 1 porción es 15gr de CHO", "Guaba mediana (75gr) = 1 porción es 15gr de CHO", 
 "Media (1/2) taza de guanababa mediana (75gr) = 1 porción es 15gr de CHO", "Dos guayabas nacionales medianas (135gr) = 1 porción es 15gr de CHO", 
 "Dos higos unidades (75gr) = 1 porción es 15gr de CHO", "Dos kiwis unidades (100gr) = 1 porción es 15gr de CHO", "Lima mediana (150gr) = 1 porción es 15gr de CHO", 
 "Cinco limones meyer (160gr) = 1 porción es 15gr de CHO", "Tercio (1/3) de Mamey (85gr) = 1 porción es 15gr de CHO", "Mandarina mediana con cascara (128gr) = 1 porción es 15gr de CHO", 
 "Media taza de pedazos de mango (100gr) = 1 porción es 15gr de CHO", "Manzana pequeña (125gr) = 1 porción es 15gr de CHO", 
 "Tres unidades de maracuyá (120gr) = 1 porción es 15gr de CHO", "Taza de pedazos de melón (180gr) = 1 porción es 15gr de CHO", 
 "Taza de moras (150gr) = 1 porción es 15gr de CHO", "Taza de mortiños (150gr) = 1 porción es 15gr de CHO", "Naranja mediana (130gr) = 1 porción es 15gr de CHO", 
 "Dos naranjillas (100gr) = 1 porción es 15gr de CHO", "Orito pequeño (65gr) = 1 porción es 15gr de CHO", "Taza de pedazos de papaya (115gr) = 1 porción es 15gr de CHO", 
 "Pepino (240gr) = 1 porción es 15gr de CHO", "Pera mediana (100gr) = 1 porción es 15gr de CHO", "Media (1/2) taza de pedazos de piña (100gr) = 1 porción es 15gr de CHO", 
 "Pitahaya pequeña (75gr) = 1 porción es 15gr de CHO", "Taza de sandia (200gr) = 1 porción es 15gr de CHO", 
 "Cuarto(1/4) de taza de tamarindo (28gr) = 1 porción es 15gr de CHO", "Dos taxos (150gr) = 1 porción es 15gr de CHO", 
 "Tomate de arbol pequeño (100gr) = 1 porción es 15gr de CHO", "Media (1/2) toronja (140gr) = 1 porción es 15gr de CHO", "Dos tunas (150gr) = 1 porción es 15gr de CHO", 
 "7-10 unidades de uvas (75gr) = 1 porción es 15gr de CHO", "Doce (12) uvillas (150gr) = 1 porción es 15gr de CHO", 
 "Una y media (1 1/2) taza de coco fresco (90gr) = 1 porción es 15gr de CHO", "Tres cuartos (3/4) de taza de coco rallado (45gr) = 1 porción es 15gr de CHO",
 "Tercio (1/3) de taza  de Arroz (58gr) = 1 porción cocida es 15gr CHO","Media taza de Arveja tierna (100gr) = 1 porción cocida es 15gr CHO",
 "Tres (3) cucharadas de Avena Hojuejas (24gr) = 1 porción  es 15gr CHO","Unidad de Bolón de verde (50gr) = 1 porción  es 45gr CHO",
 "Tres (3) tazas de Canguil (20gr) = 1 porción cocida es 15gr CHO","Media unidad de Choclo (120gr) = 1 porción cocida es 15gr CHO",
 "Media taza de Choclo desgranado (75gr) = 1 porción cocida es 15gr CHO","Empanada Mediana (90gr) = 1 porción  es 30gr CHO",
 "Tercio (1/3) de taza  de Frejol (100gr) = 1 porción cocida es 15gr CHO","Seis (6) cuadritos - 3 unidades de Galletas Saltinas (20gr) = 1 porción  es 15gr CHO",
 "Tercio (1/3) de taza  de Garbanzo (75gr) = 1 porción cocida es 15gr CHO","Tress cucharadas de Granola (18gr) = 1 porción  es 15gr CHO",
 "Media taza de Granos tiernos (100gr) = 1 porción cocida es 15gr CHO","Media taza de Habas con cáscara (85gr) = 1 porción cocida es 15gr CHO",
 "Dos cucharadas de Harina (25gr) = 1 porción  es 15gr CHO","Media taza de Lenteja (90gr) = 1 porción cocida es 15gr CHO",
 "Tercio (1/3) de Maduro (55gr) = 1 porción  es 15gr CHO","Cuarto (1/4) de taza de Maicena (15gr) = 1 porción  es 15gr CHO",
 "Media taza de Mote (54gr) = 1 porción cocida es 15gr CHO","Rebanda de Pan de molde (20gr) = 1 porción  es 15gr CHO",
 "Pequeño Pan de yuca (10gr) = 1 porción  es 15gr CHO","Rebanada de Pan integral (25gr) = 1 porción  es 15gr CHO",
 "Medio pan redondo (25gr) = 1 porción  es 15gr CHO","Unidad de Pancake (45gr) = 1 porción  es 15gr CHO",
 "Papa pequeña (80gr) = 1 porción cocida es 15gr CHO","Tercio (1/3) de taza  de Pasta, Fideo (47gr) = 1 porción cocida es 15gr CHO",
 "Pedazo de Pastel sin cubierta (90gr) = 1 porción cocida es 45gr CHO","Media taza de Pure de papa (110gr) = 1 porción cocida es 20gr CHO",
 "Dos cucharadas de Quinua cruda (25gr) = 1 porción  es 15gr CHO","Rollo mediano de Sushi rollo california (45gr) = 1 porción  es 7gr CHO",
 "Taza de Sopa tipo crema (240gr) = 1 porción cocida es 15gr CHO","Tortilla de trigo mediana (28gr) = 1 porción cocida es 15gr CHO",
 "Media (1/2) tortillas de maíz grande (30gr) = 1 porción cocida es 15gr CHO","Cuarto (1/4) de taza de Tostado (25gr) = 1 porción cocida es 15gr CHO",
 "Tercio (1/3) de unidad de Verde (45gr) = 1 porción cocida es 15gr CHO","Tercio (1/3) de unidad de Yuca (40gr) = 1 porción cocida es 15gr CHO",
 "Media (1/2)  unidad de Zanahoria blanca (50gr) = 1 porción cocida es 15gr CHO","Taza de Leche (240ml) = 1 porción  es 12gr CHO",
 "Taza de Leche semidescremada (240ml) = 1 porción  es 12gr CHO","Media (1/2) taza de Leche evaporada (125ml) = 1 porción  es 14gr CHO",
 "Tres Cucharadas de Leche en polvo (28gr) = 1 porción  es 12gr CHO","Cucharada de Leche condensada = 1 porción  es 15gr CHO",
 "Taza de Leche de soya (240ml) = 1 porción  es 4gr CHO","Media (1/2) taza de Helado de vainilla (125gr) = 1 porción  es 24gr CHO",
 "Tres cuartos (3/4) de taza de Yogurt natural (180ml) = 1 porción  es 12gr CHO","Tres cuartos (3/4) de taza de Yogurt light (180ml) = 1 porción  es 16gr CHO",
 "Media (1/2) taza de Atún (60gr) = 1 porción  es 0gr CHO","Cinco unidades de Camarón (45gr) = 1 porción  es 0gr CHO","Pedazo de Carne blanca (90gr) = 1 porción  es 0gr CHO",
 "Filete de Carne de res magra (90gr) = 1 porción  es 0gr CHO","Media (1/2) taza de Carne molida (60gr) = 1 porción  es 0gr CHO",
 "Filete de Corvina / merzula (90gr) = 1 porción  es 0gr CHO","Pedazo de Higado (90gr) = 1 porción  es 0gr CHO","Unidad de Huevo (50gr) = 1 porción  es 0gr CHO",
 "Rebanada de Jamón (50gr) = 1 porción  es 0gr CHO","Media (1/2) taza de Mariscos (60gr) = 1 porción  es 0gr CHO","Filete de Pechuga de pollo (90gr) = 1 porción  es 0gr CHO",
 "Unidad de Salchicha (45gr) = 1 porción  es 3gr CHO","Tres chucaradas de Queso fresco (40gr) = 1 porción  es 2gr CHO","Pedazo de Queso mozzarella (25gr) = 1 porción  es 0gr CHO",
 "Tres chucaradas de Requesón (36gr) = 1 porción  es 3gr CHO","Media (1/2) taza de Calamar (120gr) = 1 porción  es 1gr CHO",
 "Diez (10) unidades de Aceituna verde (115gr) = 1 porción  es 5gr CHO","Una y media cucharadas de Ajonjoli (12gr) = 1 porción  es 1gr CHO",
 "Doce unidades de Almendra (12gr) = 1 porción  es 3gr CHO","Cuatro unidades de Ciruela pasa seca (27gr) = 1 porción  es 16gr CHO",
 "Media (1/2) taza de Maní / cacahuate (70gr) = 1 porción  es 15gr CHO","Taza de Nueces (105gr) = 1 porción  es 15gr CHO",
 "Dos cucharadas de Pasas (20gr) = 1 porción  es 115gr CHO","Media (1/2) taza de Pepas de sambo (28gr) = 1 porción  es 15gr CHO",
 "Cucharadita de Azucar blanca (5gr) = 1 porción  es 5gr CHO","Cucharadita de Azucar morena (5gr) = 1 porción  es 5gr CHO",
 "Cucharadita de Cocoa sin azucar (16gr) = 1 porción  es 3.5gr CHO","Cuatro cucharaditas de Fructosa en polvo (16gr) = 1 porción  es 16gr CHO",
 "Cucharadita de Mermelada (20gr) = 1 porción  es 13gr CHO","Cucharadita de Miel de abeja (21gr) = 1 porción  es 17gr CHO",
 "Cucharadita de Miel de maple (20gr) = 1 porción  es 13gr CHO","Cucharadita de Mostaza (15gr) = 1 porción  es 1gr CHO",
 "Cucharadita de Salsa de tomate (15gr) = 1 porción  es 4gr CHO","Cucharadita de Salsa de soya (10gr) = 1 porción  es 1gr CHO",
 "Media (1/2) taza de Vegetales cocinados (gr) = 1 porción cocida es 5gr CHO","Taza de Vegetales crudos (gr) = 1 porción  es 5gr CHO",
 "Cucharada de Ajo  (3gr) = 1 porción  es 1gr CHO","Media (1/2) taza de Alcachofas (80gr) = 1 porción cocida es 10gr CHO",
 "Taza de Apio (100gr) = 1 porción  es 3.5gr CHO","Media (1/2) taza de Berenjena (100gr) = 1 porción cocida es 4gr CHO","Taza de Brócoli (100gr) = 1 porción  es 5gr CHO",
 "Media (1/2) taza picada de Cebolla blanca (50gr) = 1 porción cocida es 4gr CHO","Media (1/2) taza picada de Cebolla perla (58gr) = 1 porción  es 6gr CHO",
 "Taza picados de Champiñon (150gr) = 1 porción  es 2.5gr CHO","Media (1/2) taza de Col (75gr) = 1 porción cocida es 4gr CHO",
 "Media (1/2) taza de Col de bruselas (100gr) = 1 porción cocida es 5gr CHO","Taza de Coliflor (120gr) = 1 porción cocida es 5gr CHO",
 "Cinco unidades de Espárragos (100gr) = 1 porción  es 5gr CHO","Media (1/2) taza de Espinaca / acelga (83gr) = 1 porción cocida es 3gr CHO",
 "Taza de Lechuga (40gr) = 1 porción  es 1gr CHO","Taza de Pepinillo (100gr) = 1 porción  es 4gr CHO","Taza de Pimiento verde (100gr) = 1 porción  es 4gr CHO",
 "Taza de Rábano (15gr) = 1 porción  es 4gr CHO","Media (1/2) taza de Remolacha (50gr) = 1 porción cocida es 5gr CHO","Unidad de Tomate (120gr) = 1 porción  es 5gr CHO",
 "Media (1/2) taza de Zanahoria (50gr) = 1 porción  es 5gr CHO","Media (1/2) taza de Zapallo (70gr) = 1 porción cocida es 5gr CHO",
 "Vaso de Agua de coco (240gr) = 1 porción  es 9gr CHO","Media (1/2) taza de Avena colada casera (145gr) = 1 porción  es 15gr CHO",
 "Vaso grande de Bebida gaseosa, cola (350ml) = 1 porción  es 40gr CHO","Vaso de Cola light (240ml) = 1 porción  es 0gr CHO",
 "Vaso de Jugo con agua (240ml) = 1 porción  es 15gr CHO","Medio (1/2) vaso de Jugo puro (120ml) = 1 porción  es 15gr CHO","Copa de Vino (150ml) = 1 porción  es 5.5gr CHO",
 "Vaso grande de Cerveza (350ml) = 1 porción  es 18gr CHO","Vaso de Cerveza Light (240ml) = 1 porción  es 5gr CHO","Cuatro cucharaditas de Aceite (20gr) = 1 porción  es 0gr CHO",
 "Dos cucharaditas de Crema de leche (40gr) = 1 porción  es 1.8gr CHO","Cuatro cucharaditas de Mantequilla (24gr) = 1 porción  es 0gr CHO",
 "Cucharada de Mayonesa (15gr) = 1 porción  es 0gr CHO"];
 var cho = [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,
 15,15,15,45,15,15,15,30,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,45,20,15,7,15,15,15,15,15,15,15,12,12,14,12,15,4,24,12,16,0,0,0,0,0,0,0,0,0,0,0,3,2,0,3,1,5,1,3,16,
 15,15,115,15,5,5,3.5,16,13,17,13,1,4,1,5,5,1,10,3.5,4,5,4,6,2.5,4,5,5,5,3,1,4,4,4,5,5,5,5,9,15,40,0,15,15,5.5,18,5,0,1.8,0,0]
 
 
 function cambiarTab(tab) {
	 document.getElementById("tabCarbs").style.display="none"; 
	 document.getElementById("tabInsulina").style.display="none"; 
	 document.getElementById("tabHistoria").style.display="none"; 
	 document.getElementById("tabHerramientas").style.display="none"; 
	 
	 if (tab==1){
		 document.getElementById("tabCarbs").style.display="block"; 
	 }
	 else if (tab==2){
		 document.getElementById("tabInsulina").style.display="block"; 
	 }
	 else if (tab==3){
		 document.getElementById("tabHistoria").style.display="block"; 
	 }
	 else if (tab==4){
		 document.getElementById("tabHerramientas").style.display="block"; 
		 document.getElementById("carbsInput").value=localStorage.getItem("conversioncarb");
	 }
	 
 }
 
 function grabaCarbs(){
	 window.carbs=parseInt(document.getElementById("carbsInput").value); 
	 localStorage.setItem("conversioncarb",window.carbs);
	 cambiarTab(1);
	 document.getElementById('myInput').value="";
	 myFunction();
	 sumatTotales();
 }
 
 function grabarComida(){
	 //graba comida en historial
 }
 
 function myFunction() {
 
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
   if (input.value.length>0) {
	document.getElementById("myUL").style.display="block";
  }
  else{
	  document.getElementById("myUL").style.display="none";
  }
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function abrirModal(producto){
	document.getElementById('modTitulo').innerHTML=window.productos[producto];
	document.getElementById('modImg').src="img/"+window.imagenes[producto];
	document.getElementById('modDetalle').innerHTML=window.descripcion[producto];
	document.getElementById('datoproducto').value=producto;
	$('#ModalProducto').modal('show');
}

function liberaSearch(){
	document.getElementById('myInput').value="";
	myFunction();
	$('#myInput').focus();
}

function mueveNumero(cuanto){
	var numeroActual=0;
	var elDatoAhora= document.getElementById('example-number-input').value;
	
	if (cuanto=="2"){
		if (elDatoAhora=="1"){	
			document.getElementById('example-number-input').value="3/4";
			cantidadPorciones=0.75;
		}else if (elDatoAhora=="3/4"){
			document.getElementById('example-number-input').value="1/2";
			cantidadPorciones=0.50;
		}else if (elDatoAhora=="1/2"){
			document.getElementById('example-number-input').value="1/4";
			cantidadPorciones=0.25;
		}else if (elDatoAhora=="1/4"){
			document.getElementById('example-number-input').value="0";
			cantidadPorciones=0;
		}else if (elDatoAhora=="0"){
			document.getElementById('example-number-input').value="0";
			cantidadPorciones=0;
		}
		else{
			numeroActual=parseFloat(elDatoAhora)-1;
			cantidadPorciones=numeroActual;
			document.getElementById('example-number-input').value=numeroActual; 
		}
	}
	else {
		if (elDatoAhora=="3/4"){	
			document.getElementById('example-number-input').value="1";
			cantidadPorciones=1;
		}else if (elDatoAhora=="1/2"){
			document.getElementById('example-number-input').value="3/4";
			cantidadPorciones=0.75;
		}else if (elDatoAhora=="1/4"){
			document.getElementById('example-number-input').value="1/2";
			cantidadPorciones=0.50;
		}else if (elDatoAhora=="0"){
			document.getElementById('example-number-input').value="1/4";
			cantidadPorciones=0.25;
		}
		else{
			numeroActual=parseFloat(elDatoAhora)+1;
			cantidadPorciones=numeroActual;
			document.getElementById('example-number-input').value=numeroActual; 
		}
	}
	
}


function agregarComida(){
  

  var elProducto= document.getElementById("datoproducto").value;
  $('#ModalProducto').modal('hide');
  var table = document.getElementById("tablaComida");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = '<img src="img/'+window.imagenes[elProducto]+'" width="50px"/>';
  cell2.innerHTML = window.productos[elProducto];
  cell3.innerHTML = window.cantidadPorciones;
  var soloProcion= (window.descripcion[elProducto]).split("=");
  cell4.innerHTML = soloProcion[0];
  cell5.innerHTML = (parseFloat(window.cho[elProducto])*window.cantidadPorciones).toFixed(2);
  cell6.innerHTML = '<img src="img/borrar.jpg" width="30px" onclick="borrarFila(this)"/>';
  cell1.className = 'celdaFormato1';
  cell2.className = 'celdaFormato2';
  cell3.className = 'celdaFormato1';
  cell4.className = 'celdaFormato2';
  cell5.className = 'celdaFormato3';
  cell6.className = 'celdaFormato1';
  document.getElementById('myInput').value="";
  myFunction();
  document.getElementById("miComida").style.display="block";
  document.getElementById("avisoInicial").style.display="none";
  document.getElementById("example-number-input").value=1;
  window.cantidadPorciones=1;
  sumatTotales();
  
}

function sumatTotales(){
	var totalCHO=0;
    var table = document.getElementById('tablaComida');
	document.getElementById("choCell").innerHTML="0";
	document.getElementById("insulinaCell").innerHTML="0";
    for (var r = 1, n = table.rows.length; r < n; r++) {
            //alert(table.rows[r].cells[4].innerHTML);
			totalCHO= totalCHO + parseFloat(table.rows[r].cells[4].innerHTML);
			document.getElementById("choCell").innerHTML= (parseFloat(totalCHO)).toFixed(2);
			//calculo insulinaCell
			var cuantaInsulina=Math.round(parseFloat(totalCHO)/parseFloat(carbs));
			document.getElementById("insulinaCell").innerHTML=cuantaInsulina;
			
    }
	
}

function borrarFila(r){
	var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tablaComida").deleteRow(i);
	sumatTotales();
}

document.addEventListener("deviceready", function(){
    //llena los datos
	mysettingvar1=localStorage.getItem("conversioncarb");
	if (mysettingvar1>0){
		cambiarTab(1);
	}else
	{
		cambiarTab(4);
	}
 },true);