# Restaurar estado
El desarrollo de la práctica consiste en el uso de un método que permita guardar el estado de ejecución por lo que para esta práctica se desarrolló una aplicación de Notas en la cual se permite crear, editar y guardar notas.

Decidí utilizar C# para esta práctica. Se utilizarán funciones que permiten escribir y leer de archivos.

La idea es que mientras se escribe una nota ocurre algún error con el programa lo que se lleve escrito no se perderá.

Para realizar esto utilice el componente timer, el cual permite ejecutar una sección de código cada determinado tiempo. 

El tiempo de intervalo del timer se puede modificar
[![timer.png](https://i.postimg.cc/8c6hsJBv/timer.png)](https://postimg.cc/BPJ8VvzZ)


Para evitar que se pierda información cree un archivo de respaldo donde se ira guardando lo escrito en la nota cada quince segundos.
Si la nota esta vacía o se acaba de guardar no abra respaldo, el respaldo comenzara hasta que se agregue un carácter más o se quite uno después de guardar. 


### Guardar
[![captura2.png](https://i.postimg.cc/nLNrrddd/captura2.png)](https://postimg.cc/yJXsrTC9)

Cuando la nota que se está editando se guarda el archivo de respaldo será eliminado, esto es con el propósito de no usar memoria de más.

### Abrir/editar

[![captura3.png](https://i.postimg.cc/zv8JH4Tk/captura3.png)](https://postimg.cc/YGDcJnn4)

Para la función abrir archivo utilice el componente openfiledialog que me permite invocar el explorador de archivo y con esto buscar archivos que se pueden editar. El archivo seleccionado se pasa a un string el cual con la función streamreader leo todo el archivo y se lo pasa al cuadro de texto.

[![abrir.png](https://i.postimg.cc/0j2Tsvph/abrir.png)](https://postimg.cc/0MFWYLXC)

### Inicio

[inicio.png](https://postimg.cc/JGcx0D8x)

Al iniciar el programa se ocultaron los controles de respaldo siempre y cuando no exista un archivo de respaldo. Si existe un respaldo se mostrarán dos botones uno para recuperar el respaldo y otro para descartarlo.

### Ejemplo: 
Se tiene una nota con un texto aleatorio.
[![ejemplo1.png](https://i.postimg.cc/85C4kz0d/ejemplo1.png)](https://postimg.cc/HJfXBdHj)

Ocurre un error
[![ejemplo2.png](https://i.postimg.cc/fTdGQ8Xz/ejemplo2.png)](https://postimg.cc/KRZqnrJw)

Cuando nuevamente inicia la aplicación se iniciará mostrando en la barra el mensaje recuperar archivo. Si se presiona el botón verde el archivo se recuperará.

[![ejemplo3.png](https://i.postimg.cc/4y9SZ3YL/ejemplo3.png)](https://postimg.cc/y37PysXc)

Se mostrar el texto que se había estado escribiendo hasta antes de la aparición del error

[![ejemplo1.png](https://i.postimg.cc/85C4kz0d/ejemplo1.png)](https://postimg.cc/HJfXBdHj)
