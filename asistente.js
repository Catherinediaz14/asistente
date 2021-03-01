
if (annyang){

    // Variable para almacenar las voces de nuestro sistema.
    var  voices ;

    // Inicializamos pronunciar.
    var  utter  =  new SpeechSynthesisUtterance();
    utter.rate  =  1;
    utter.pitch  =  0,5;
    utter.lang  =  'es';

    // Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged  =  function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    } ;

    // Definimos los comandos a utilizar.
    var  commands = {
        'hola maria': function () {
            utter.text  = 'Hola usuario' ;
            // Setea la voz que queremos usar en base a nuestra lista.
            utter.voice  =  voices [2] ;
            window.speechSynthesis.speak (utter) ;
        } ,
        'como estas': function  ( )  {
             utter.text  =  'Muy bien!' ;
             utter.voice  =  voices [ 2 ] ;
            window.speechSynthesis.speak(utter);
        } ,
        'hola': function  ( )  {
            utter.text  =  'hola, cual es tu nombre?' ;
            otter.voice  =  voices [2] ;
            window.speechSynthesis.speak(utter) ;
            // Guarda el nombre que le decimos por voz.
            annyang.addCallback ( 'result', funtión (phrases)  {
                // Imprime el nombre por consola.
                console.log ( "Nombre:",  phrases [0]);
                // Para el resultado del evento.
                annyang.removeCallback ('result');
                // Nos dice hola + el nombre que le digamos por voz.
                utter.text  =  'Hola,'  +  phrases [ 0 ] ;
                window.speechSynthesis.speak ( utter ) ;
            } ) ;
        } ,
        // Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chistes' : function  ( )  {
            chistes = [ 'mama que haces en frente de la computadora con los ojos cerrados? nada, hijo, windows me dijo que cierre  las pestañas. ' ,
                'por que el agua es azul? por que los peces hacwen blue.',
                'me grito: sal de mi vida! yo le dije: pimienta de mi corazon!? ',
                'wikipedia: yo lo se  todo, google: yo lo tengo todo, internet: sin mi no son nada . '
            ];
            utter.text  =  chistes [Math.floor(Math.random() * chistes.length )]
            utter.voice =  voices [2] ;
            window.speechSynthesis.speak(utter);
        }
    } ;

    // Esto nos sirve para ver que escucha el programa en tiempo real.
    
    annyang.addCallback ('resultado', función (phrases) {
      console.log ("Creo que el usuario dijo:", phrases [0]);
      console.log ("Pero, de nuevo, podría ser cualquiera de los siguientes:", phrases);
       });
       


    // Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    // Annyang comienza a escuchar.
    annyang.start({ autoRestart:false, continuous:true });
}
