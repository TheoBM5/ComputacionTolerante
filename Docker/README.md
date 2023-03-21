# Restaurar estado
El desarrollo de la práctica consiste en el uso de un método que permita guardar el estado de ejecución por lo que para esta práctica se desarrolló una aplicación de Notas en la cual se permite crear, editar y guardar notas.

Decidí utilizar C# para esta práctica. Se utilizarán funciones que permiten escribir y leer de archivos.

La idea es que mientras se escribe una nota ocurre algún error con el programa lo que se lleve escrito no se perderá.

Para realizar esto utilice el componente timer, el cual permite ejecutar una sección de código cada determinado tiempo. 

El tiempo de intervalo del timer se puede modificar.
[![timer.png](https://i.postimg.cc/8c6hsJBv/timer.png)](https://postimg.cc/BPJ8VvzZ)


Para evitar que se pierda información cree un archivo de respaldo donde se ira guardando lo escrito en la nota cada quince segundos.
Si la nota esta vacía o se acaba de guardar no abra respaldo, el respaldo comenzara hasta que se agregue un carácter más o se quite uno después de guardar. 


### Guardar
[![captura2.png](https://i.postimg.cc/nLNrrddd/captura2.png)](https://postimg.cc/yJXsrTC9)
