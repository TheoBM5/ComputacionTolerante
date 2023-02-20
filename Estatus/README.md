# Crear Servicios para Windows con Python
## ¿qué es un servicio en informática?
Existen dos tipos de procesos que puede ejecutar el ordenador.
1.	Aplicaciones
2.	Servicios / Daemons

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Estatus/Recursos/logo.jpg?raw=true)

Instalaciones 

Tener descargado NSSM - the Non-Sucking Service Manager 

Esta utilidad gratuita permite instalar, iniciar, detener y desinstalar servicios de windows
https://nssm.cc/download

Módulo psutil
python -m pip install psutil


Las aplicaciones son aquellos procesos que se ejecutan generalmente en primer plano y responden a la interacción con el usuario.
Los servicios (llamados daemons en Linux), son un tipo de procesos que se ejecutan de forma ajena al usuario. Los servicios no están vinculados al usuario, por lo que se pueden ejecutar antes de que se haya iniciado sesión. Por otra parte, al ser independientes del usuario, los servicios no pretenden interactuar con el usuario, sino realizar una función en segundo plano. No tienen interfaz gráfica y no están vinculados a un terminal.

Desarrollo
Lo que se realizara en esta practica es un servicio a partir de un script en Python 
se plantea que una aplicación permanezca abierta o ejecutándose mediante un servicio para que aun cuando haya ocurrido un error y tenga que cerrarse, se reabra la aplicación automáticamente. Para ello, primeramente, se creó el script para la aplicación que se iba a utilizar, en el cual se desarrolla código que comprueba constantemente si el estado de la aplicación esta activo o no.
Pickle en Python se usa principalmente para serializar y deserializar una estructura de objetos de Python. En otras palabras, es el proceso de convertir un objeto de Python en un flujo de bytes para almacenarlo en un archivo/base de datos, mantener el estado del programa entre sesiones. Cuando un flujo de bytes se elimina, el módulo pickle primero crea una instancia del objeto original y luego completa la instancia con los datos correctos.
La primera función del programa busca el proceso que será interceptado, para señalar al proceso que se quiere interceptar se debe pasar el nombre del proceso como parámetro, en caso de no recibir un parámetro se señalará un mensaje advirtiendo que se requiere un parámetro.
También se añade una funcion que es la encargada de matar el proceso, la cuál es llamada al último de los procesos.
Se hizo uso de The Non Sucking Service Manager (NSSM), el cual permite supervisar el servicio en ejecución y reiniciarlo si muere.
Nssm
Para poder utilizar esta herramienta es necesario seguir los pasos que vienen en su instalación, primero se descarga el programa, se descomprime, se busca el ejecutable que corresponde a la arquitectura de nuestra computadora y se copea y pega en una carpeta llamada custom-service. Esta carpeta debe tener tanto el ejecutable nssm así como el script que se usara como servicio. 
Para configurar e iniciar el servicio primero se debe abrir un consola con permisos de administrador, nos dirigimos a la ruta donde se encuentra la carpeta con los dos archivos.
Se Abre el instalador de nssm ejecutando:
### nssm.exe install proclocker

Se ejecutará el programa nssm, en el primer campo se pone la ruta donde se encuentra Python, en el segundo campo la ruta a la carpeta custom-service y en el último campo se ingresa el nombre del script y se pasan los parámetros, en este caso lo que cerrara será el proceso Firefox, por lo que cerrara el navegador una vez que el servicio este activo.
Después de configurar el campo aparecerá una ventana con un mensaje indicando que se instalo correctamente. 
Es importante que las rutas estén bien dirigidas y escritas, puse una ruta mal y no me dejaba iniciar el servicio, por lo que si aparece un error como el mostrado arriba el causante puede ser una mala captura en alguna de las direcciones. 
Finalmente, lo que se realizara será iniciar el servicio proclocker: START, una vez ingresado lo que hará será cerra mi navegador.
Procesos
proclocker aparece en la lista de procesos del administrador de tareas de Windows. La ventana del navegador se cerro y cada vez que la intente abrir se cerrera. Al reiniciar la computadora el proceso seguirá ejecutándose por lo que seguiré sin poder acceder al navegador. 
Para detener el servicio se ejecuta en la línea de comandos nssm.exe stop proclocker
Al detenerse el servicio he intentar entrar al navegador se observará que todas las pestañas que estaban abiertas antes del cierre siguen ahí. Esto debido al módulo pickle.
Conclusión:  Conocer nuevas formas de manejar un programa es esencial para poder tener nuevas herramientas que permitan tener mayor control sobre lo que ocurre en nuestros programas, incluso el uso de servicios nos permite automatizar ciertas tareas que se requieran realizar cada determinado tiempo. Con este tipo de herramientas podremos supervisar las condiciones en las que buscamos que se mantenga una aplicación.
