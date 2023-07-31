Mini proyecto realizado en Ionic.
Motivo por le cual me he decantado pr usar Ionic y no otra cosa, simple, es lo que utlicé para realizar mi Proyecto Final de Grado (y ya me manejaba mejor).

Proyecto consta de 4 carpetas pricipales bajo SRC:

    - Home: desde la cual se llegan a las otras 3 páginas (Cuidado, Vamos, Ups) a tarvés de botones.
    - Cuidado: nos lleva a un dialog o modal y muestra por pantalla el mensaje de CUIDADO (con una imagen de advertencia). Para cerrar dicha ventana se puede hacer clic en la X arriba a la izquierda o al botón de Cancelar.
    - Vamos: nos lleva a un dialog o modal y muestra por pantalla el mensaje de VAMOS (con una imagen de OK). Para cerrar dicha ventana se puede hacer clic en la X arriba a la izquierda o al botón de Cerrar pestaña.
    - Ups: nos lleva a un dialog o modal y muestra por pantalla el mensaje de Upss (con una imagen de NOT OK). Para cerrar dicha ventana se puede hacer clic en la X arriba a la izquierda.

Para crear el proyecto se ha usado el sigueinte comando en el terminal: nos lleva a un dialog o modal y muestra por pantalla el mensaje de

- $ ionic start dialogApps blank --capacitor

Hemos ptado CAPACITOR en vez de CORDOVA porque por experiencia previa es lo que mejor nos ha funcionado (y menos fallos a dado) a la hora de codificar.

Para ver los avances-cambios por pantalla se ha utilizado un LIVE RELOAD en vez de el típico SERVE (así se pueden ver los cambiso en tiempo real y no se ha de re-compilar con cada cambio en el código).

- $ ionic cordova run ios -l --external

En nuestro caso el run lo hacemos con la plataforma IOS, para hacer lo mismo con ANDROID: ionic cordova run android -l --external

Para que esto funcione se tiene que haber geenreado previamente lo necesario para ios: nos lleva a un dialog o modal y muestra por pantalla el mensaje de

- $ ionic capacitor add <platform> [options]

Para montar el proyecto en plataforma IOS

- $ ionic capacitor build ios
