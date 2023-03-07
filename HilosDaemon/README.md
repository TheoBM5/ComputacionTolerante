# Hilos, Daemon y procesos
## C#
### Desarrollo
Para esta practica decidí utilizar la practica usada en la tarea de checkpoint donde realice una aplicación de notas. Cada nota que no fuera guardad se respaldaría, esto fue realizado con la ayuda de un hilo.
En esta practica investigue como usar daemons en el lenguaje c# encontrándome con la siguiente información: 
Subprocesos de fondo de C# ~ Subprocesos de Java Daemon 
Subprocesos en primer plano de C# ~ Subprocesos de usuario de Java 
De forma predeterminada, los subprocesos que crea explícitamente son subprocesos en primer plano.
Thread.IsBackground = true;
Haciendo que el hilo trabaje de fondo hace que trabaje como un Daemon , no se preocupara porque el programa no termine sigue su ejecución. 
Para continuar respaldando la información decidí hacer que un archivo guardara las horas en las que el archivo de respaldo no existe, para así saber cuando es que el archivo fue modificado. Esto se ejecuta en un Daemon para que trabaje de forma separada al programa.



![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/HilosDaemon/Recursos/image1.png?raw=true)
Se creo un hilo y se validó la opción para que el hilo trabajara de fondo

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/HilosDaemon/Recursos/image2.png?raw=true)
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/HilosDaemon/Recursos/image3.png?raw=true)
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/HilosDaemon/Recursos/image4.png?raw=true)
Esta es la función que trabajara el Daemon, donde se creara un archivo de texto y se guardara la hora en la que el archivo dejo de ser respaldado. 
