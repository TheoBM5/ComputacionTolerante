# Proyecto Final

## Clima
El proyecto final es una pequeña aplcacion para ver el cima, para esto hice uso de la api de openweathermap. Intente implementar todos los conceptos vistos en clase con el fin de hacer la aplicacion lo mas toplerante a fallos posible. 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/gif2.gif?raw=true)

### Manejo de errores
En esta unidad se vio como manejar los errores que se pueden presentar en una aplicacion.
Para el proyecto implementa validaciones para evitar cualquier error que pudiera ocasionar algun fallo por intentar procesar una cadena erronea. Para las validaciones contemple tanto las cadenas vacias, campos numericos y caracteres.  Esto tambien permite no hacer consultas incesarias a la api ya que la consulta no se realizara si no cumple contodas las validaciones
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen1.png?raw=true)

Para el manejo de errores con la api, ya sea porque la api no estuviera disponible o hubiera algun fallo de conexion use catch para atrapar esos errores y señarle al usuario el incovenientee temporal. Tanto con las validaciones como con el manejo de los errores permitio que en ningun caso la aplicacion dejara de funcionar

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen2.png?raw=true)

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/gif3.gif?raw=true)

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen3.png?raw=true)
#### Checkpoint
Para mantener el estado de la aplicacion opte por tener una cache con las consultas hechas por el usuario, esto con el fin de no realizar mas consultas a la api, cuando se busca una ciudad se guardara en la cache y si el usuario busca otra vez la misma ciudad no se realizara otra vez la consulta si no que se obtendra el resultado de la cache

Tambien tome en cuenta que se pudiera llenar la memoria y que los datos no se fueran a actualizar por lo que , implemente un tiempo para que se pudiera usar la cache antes de borrarse. 

Para implementar toda esta parte de guardar en cache hice uso de localStorage que es una API de JavaScript que permite almacenar datos de forma persistente en el navegador web. Proporciona una forma sencilla de guardar información en el navegador y acceder a ella en futuras visitas al mismo sitio web. 

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen4.png?raw=true)

### Docker y Kubernetes
Una vez que la aplacion estuvo terminada procedi a dockerizar la aplicacion para esto me base en el dockerfile que habia hecho en la practica de docker. 
Contrui la imagen y la corri para verificar que funcionara. Depues de eso subi la imagen a docker hub.
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen5.png?raw=true)
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/docker.png?raw=true)
Para la parte de kubernetes y de subir la aplicacion a una nube uso digital ocean aprovechando los creditos de prueba. cree un cluster y segui la instrucciones que aparecieron en la pagina. 
Una vez que kubectl y el cluster de kubernetes estuvieron vinculados comence a crear el archivo yaml. 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen6.png?raw=true)

Teniendo el archivo yaml ya puede hacer el deploy de la aplicacion y pude ver la aplicacion funcionando en el cluster de kubernetes.

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/imagen7.png?raw=true)
### Chaos Engineering
Por ultimo para verificar que los pods se mantuvieran activos uso cheekymonkey para tirar varios pods y verficar que se volvieran a reponer
Durante las pruebas varios pods fueron destruidos y en ningun momento la aplcacion fallo. Tambien viendo los pods cada vez que se eliminaba uno otro aparecia por loque esto me permitio comprobar que la aplicion era capaz de mantenerse. 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Proyectofinal/src/gif1.gif?raw=true)
