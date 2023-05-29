# Proyecto Final

## Clima
El proyecto final es una pequeña aplcacion para ver el cima, para esto hice uso de la api de openweathermap. Intente implementar todos los conceptos vistos en clase con el fin de hacer la aplicacion lo mas toplerante a fallos posible. 
### Manejo de errores
En esta unidad se vio como manejar los errores que se pueden presentar en una aplicacion.
Para el proyecto implementa validaciones para evitar cualquier error que pudiera ocasionar algun fallo por intentar procesar una cadena erronea. Para las validaciones contemple tanto las cadenas vacias, campos numericos y caracteres.  Esto tambien permite no hacer consultas incesarias a la api ya que la consulta no se realizara si no cumple contodas las validaciones


Para el manejo de errores con la api, ya sea porque la api no estuviera disponible o hubiera algun fallo de conexion use catch para atrapar esos errores y señarle al usuario el incovenientee temporal. Tanto con las validaciones como con el manejo de los errores permitio que en ningun caso la aplicacion dejara de funcionar

#### Checkpoint
Para mantener el estado de la aplicacion opte por tener una cache con las consultas hechas por el usuario, esto con el fin de no realizar mas consultas a la api, cuando se busca una ciudad se guardara en la cache y si el usuario busca otra vez la misma ciudad no se realizara otra vez la consulta si no que se obtendra el resultado de la cache

Tambien tome en cuenta que se pudiera llenar la memoria y que los datos no se fueran a actualizar por lo que , implemente un tiempo para que se pudiera usar la cache antes de borrarse. 

### Docker y Kubernetes



### Chaos Engineering
