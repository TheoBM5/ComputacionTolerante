# Kubernetes
k8s o kube. Es un sistema de código abierto de orquestación de contenedores para implementar y administrar contenedores a gran escala, permitiendo el despliegue, escalamiento y la administración automática de aplicaciones, trabajos y servicios.
¿Qué es Ingress?
Ingress permite acceder a pods desde fuera de los clústers. Es un pod que redirige las solicitudes a los servicios dentro del clúster, pero accediendo a este pod mediante Kubernetes con un servicio de LoadBalancer.
¿Qué es un LoadBalancer? distribuye automáticamente el tráfico entrante entre varios destinos, por ejemplo, instancias EC2, contenedores y direcciones IP en una o varias zonas de disponibilidad. Monitorea el estado de los destinos registrados y enruta el tráfico solamente a destinos en buen estado. Es útil porque cuando un sitio web tiene alta demanda, puede llegar al límite de su capacidad, por lo que un balanceador de carga le permite que se distribuya este trabajo para que no se caiga el sitio web y tenga mayor rendimiento en el tráfico de datos, dando servicio a todas las peticiones que puedan, para proporcionar al usuario una mejor experiencia.

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

Se construye la imagen 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/build.png?raw=true)

Se muestra que la imagen fue creada correctamente 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imagels.png?raw=true)

Se corre la imagen en un contenedor en el puerto 3000
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imagerun.png?raw=true)

Se entra en el puerto 3000 donde esta corriendo el contenedor
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/runapp.png?raw=true)

Aqui se logea con las credenciales correspondientes a mi cuenta en docker hub y se hace push de la imagen creada
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/imageweb.png?raw=true)

Aqui se muestra que la imagen fue subida correctamente a docker hub
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Docker/src/hub.png?raw=true)

