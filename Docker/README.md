# Docker
### Desarrollo

Instalaciones
• Docker : https://www.docker.com/products/dockerdesktop/  
Se agregó a las rutas del sistema para poder trabajar con él. El desarrollo de su instalación se encuentra en el archivo ‘Instalar Docker.txt’.

Docker es una herramienta diseñada para facilitar la creación, implementación y ejecución de aplicaciones mediante el uso de contenedores. 

Es una instancia de una imagen ejecutándose en un ambiente aislado.

Es un archivo construido por capas, que contiene todas las dependencias para ejecutarse, tal como: las dependencias, configuraciones, scripts, archivos binarios, etc


Dockerfile
Un archivo de texto con instrucciones necesarias para crear una imagen. Se puede ver como un blueprint o plano para su construcción.


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/dockefile.png?raw=true)


IMAGEN DE DOCKER 
- FROM: Especifica una imagen padre donde normalmente se escoge con las dependencias y librerías que se ocuparán para el trabajo. Para crear en este caso una imagen de Node, Alpine3 es la más comúnmente utilizada por su poco peso. 
- WORKDIR: Especifica el directorio donde se va a crear, y si no existe, se crea. 
- COPY. . : Copea todos los archivos que hay dentro del directorio 
- RUN:  Se indica que se deben de descargar e instalar los módulos de node.
- CMD: Pasa mediante argumentos el comando que va a correr


Ahora, para la creación de la imagen y contenedor, se usan algunos de los s guientes comandos, los cuáles son básicos para el uso de Docker: Para construir la imagen se utiliza el comando: 
- “docker build –tag nombreimagen .” 
Para correr el contenedor, se utiliza: 
- “Docker run nombreimagen”
Y para especificar el puerto en el que se está escuchando (de manera local): 
- “Docker run -p 3000:3000 nombreimagen”


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/build.png?raw=true)

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imagels.png?raw=true)

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imagerun.png?raw=true)


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/runapp.png?raw=true)


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imageweb.png?raw=true)


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/hub.png?raw=true)
