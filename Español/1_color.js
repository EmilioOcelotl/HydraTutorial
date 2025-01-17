/////////////
/// COLOR ///
/////////////

// Son funciones de color que se pueden aplicar a las fuentes para transformarlas de diferentes maneras

// Las funciones de color en Hydra son: brightness() contrast() color() colorama() posterize() shift() invert() luma() thresh() saturate() hue() sum() r() g() b() a()

//Los transformadores se escriben normalmente entre la fuente y la salida

// Un caso general con transformaciones de color tiene la forma: fuentes(parámetros).transformador(parámetros).out() 

//Ejemplo:
osc().brightness().out() // Esto corre un oscilador con un cambio en el brillo, todos los parámetros usados son los que están por defecto.
//Se corre presionando shift+Enter

//Otra manera de escribir la misma sintaxis (indentación) es la siguiente :
osc()
  .brightness()
.out()
//Se puede correr bloques de código (desarrolado en líneas separadas) presionando ctrl+Enter

/////////
// Brillo
//Sintaxis: .brightness(cantidad)

osc().brightness().out()
//Brillo con parámetro por defecto: (0.4) = negro

//Brightness incrementa los niveles de luz en la imagen, se puede aplicar a cualquier source
//Los números negativos resultan en texturas oscuras
//Números mayores a 0 resultan adición de brillo

//Ejemplos
voronoi().brightness().out() // Voronoi con brillo por defecto
voronoi().brightness(-0.5).out() // Vornoi con brillo en negativo, resultando en texturas más oscuras
voronoi().brightness(0.8).out() // Vonoroi con brillo saturado, el número máximo antes de la saturación total del brillo depende de las texturas de color que se generen
noise().brightness([0.5, -0.5]).out() // Oscillación de brillo (a través del uso de listas) de una textura de noise

/////////
// Contraste
//Sintaxis: .contrast(cantidad)

osc().contrast().out()
//Contraste con parámetro por defecto: (1.6) = negro
//Contrast genera una exageración mayor (números positivos) o menor (números negativos) entre los tonos brillantes y oscuros, resultando en texturas con colores más o menos definidos.

//Ejemlplos


/////////
// Color
//Sintaxis: .color(rojo, verde, azul)

osc().color().out()
//Color con parámetros por defecto: (0,0,0) = negro

/////////
// Colorama
//Sintaxis: .colorama(cantidad)
//

osc().colorama().out()
//Brillo con parámetros por defecto: (0.4) = negro

/////////
// Posterize 
//Sintaxis: 
//

/////////
// Shift
//Sintaxis: 
//

/////////
// Invert 
//Sintaxis: 
//

/////////
// Lumma 
//Sintaxis: 
//

/////////
// Thresh  
//Sintaxis: 
//

/////////
// Saturate 
//Sintaxis: 
//

/////////
// Hue 
//Sintaxis: 
//

/////////
// Sum  
//Sintaxis: 
//

/////////
// R 
//Sintaxis: 
//

/////////
// G
//Sintaxis: 
//

/////////
// B 
//Sintaxis: 
//

/////////
// A 
//Sintaxis: 
//
