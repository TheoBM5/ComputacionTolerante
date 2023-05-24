Cheekymonkey
Chaos Engineering una disciplina que permite la identificación de errores antes de que estos se vuelvan pérdidas de servicio
método de experimentación para garantizar que un sistema informático pueda resistir eventos inesperados. Chaos Engineering busca identificar el punto deficiente de un servicio después de una serie de procesos condicionados que insertan un funcionamiento aleatorio e impredecible. trata de comprender el sistema. Su análisis inicia en el ataque directo e intencionado hacia el sistema para observar su resistencia. Para mejorar el estado de producto
Instalaciones:
Para esta actividad primero se instaló Cheekymonkey clonando el repositorio de la página de github del proyecto.
Instale una versión anterior de Python porque la versión que tenía no era compatible 
Una vez descargado el repositorio se instalaron las librerías necesarias.

Desarrollo
En esta actividad use la actividad anterior en la cual ya había iniciado algunos pods en base a un ejemplo de Google que cuenta con varios servicios. Cada microservicio tiene un contenedor dentro del pod.
 

El archivo de configuración de Cheekymonkey se dejo como estaba, solo cambie que solo rompieran las cajas con un golpe.
 
Una vez guardadas las configuraciones se ingreso el comando, Python cheekymonkey.py para iniciar el programa, además se incluyo como parámetro –exclude para que no eliminara archivos necesarios del cluster.
En la consola se puede ver que se inicio la aplicación, se muestra la cantidad de pods que se tienen que son en este caso 23. 
 
Después de haber ejecutado el comando aparecerá la ventana del juego de cheekymonkey, cada caja será un pod y con el mono fui rompiendo las cajas. La destrucción de las cajas se ve reflejado en la línea de comando donde aparece un mensaje cada vez que se elimina un pod. 
 
Ampliando la consola se puede apreciar que se mato un pod aleatoriamente, al estar utilizando el programa de ejemplo de Google cada vez que se mate un pod aparecerá el nombre de un servicio, en este primer caso mato el pod que tenia el servicio de compra. 
 
En la esquina superior izquierda se muestra también el ultimo pod que se eliminó, que fue el mismo que se muestra en la consola. 
 
Conforme se van eliminando mas cajas se va mostrando en la consola los pods que han sido eliminados. 
 


Conclusión: Este fue una actividad sencilla donde una herramienta curiosa que permitió implementar un poco de caos, con el fin de poder apreciar el funcionamiento de kubernetes, ya que a pesar de que se eliminan los pods se volvían a subir haciendo que los servicios siempre estuvieran disponibles. La herramienta fue fácil de instalar. En un principio no entendía su utilidad, pero investigando sobre Chaos Engineering pude comprender mas sobre la utilidad de este tipo de herramientas. 

