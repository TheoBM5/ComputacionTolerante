
**¿Qué es Java EE?**
Es un conjunto de especificaciones que envuelven Java SE (Standard Edition). Java EE proporciona una plataforma para desarrolladores con características empresariales como computación distribuida y servicios web. Las aplicaciones Java EE generalmente se ejecutan en tiempos de ejecución de referencia, como microservidores o servidores de aplicaciones.
¿Qué es Java SE? Java Standard Edition 
Esta es la plataforma central de programación de Java. Contiene todas las bibliotecas y API que cualquier programador de Java debería aprender (java.lang, java.io, java.math, java.net, java.util, etc...). es una plataforma informática en la que podemos ejecutar software, y se puede utilizar para el desarrollo y la implementación de código portátil para entornos de escritorio y servidor. Tiene el lenguaje de programación Java en uso. 
¿Qué es Jakarta EE?
Jakarta EE es una colección de tecnologías, implementaciones compatibles, estándares y API que amplían Java SE. El objetivo de Jakarta EE es abordar los desafíos de integración y arquitectura que enfrentan las aplicaciones empresariales.
¿Qué es MicroProfile?
Jakarta EE tiene varias tecnologías basadas en Java y arquitecturas modernas para crear aplicaciones nativas en la nube, microservicios y aplicaciones web escalables. También proporciona conectores para la integración con otros sistemas y tecnologías. Aprovecha décadas de experiencia de Java EE en el desarrollo y la implementación de aplicaciones de misión crítica.
¿Qué es Spring boot?
Spring Boot es un marco basado en Java de código abierto que se utiliza para crear un microservicio. Está desarrollado por Pivotal Team y se utiliza para crear aplicaciones Spring independientes y listas para producción. Este capítulo le brindará una introducción a Spring Boot y lo familiarizará con sus conceptos básicos.
Spring Boot proporciona una buena plataforma para que los desarrolladores de Java desarrollen una aplicación Spring independiente y de grado de producción que puede ejecutar. Puede comenzar con configuraciones mínimas sin la necesidad de una configuración completa de Spring. Spring Boot ofrece las siguientes ventajas a sus desarrolladores: 
•	Fácil de entender y desarrollar aplicaciones de resorte
•	Aumenta la productividad
•	Reduce el tiempo de desarrollo
¿Que es Quarkus?
Quarkus es un marco desarrollado por RedHat para crear aplicaciones Java. Quarkus se desarrolló con el objetivo de ejecutar programas Java en contenedores. En particular, se enfoca en respaldar el software de orquestación Kubernetes. Otro enfoque del desarrollo de Quarkus es el uso de bibliotecas y estándares Java establecidos.
Quarkus está diseñado para funcionar con estándares, marcos y bibliotecas populares de Java como Eclipse MicroProfile y Spring¿Que es Maven?
¿Qué es Gradle?
Gradle es una herramienta de automatización de compilación de código abierto que se basa en el concepto de Apache Maven y Apache Ant. Es capaz de construir casi cualquier tipo de software. Está diseñado para la compilación de varios proyectos, que puede ser bastante grande. Introduce un DSL (lenguaje específico de dominio) basado en Java y Groovy en lugar de XML (lenguaje de marcado extensible) para declarar la configuración del proyecto. Utiliza un DAG (Gráfico acíclico dirigido) para definir el orden de ejecución de la tarea. Gradle ofrece un modelo elástico que puede ayudar al ciclo de vida del desarrollo desde la compilación y el empaquetado de código para aplicaciones web y móviles. 



# Quarkus/MicroProfile
Instalaciones: 
Primero instale Maven, se configuraron las respectivas variables del sistema y se instalo java 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Quarkus/recursos/imagen2.png?raw=true)
 
Para empezar a usar quarkus ingresé a la página de quarkus y comencé un proyecto. Seleccione las bibliotecas que se muestran en el video. Una vez que fueron seleccionadas las bibliotecas descargué el proyecto y lo abrí en un editor de código.
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Quarkus/recursos/imagen1.png?raw=true)

Una vez que esta configurado y programado el proyecto en quarkus, se puede comenzar a ejecutar algunos de los comandos de mvn como mvn clean package el cual compilará el código y también lo empaquetará.

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Quarkus/recursos/imagen6.jpeg?raw=true)
Con el comando mvn compile quarkus:dv comienza a compilar el programa se puede ver como el programa pasa por algunos de los test. 
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Quarkus/recursos/imagen7.jpeg?raw=true)
 
Algunas de las opciones que se muestran es mostrar una interfaz para manejar algunas de las funciones de quarkus
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Quarkus/recursos/imagen8.jpeg?raw=true)
Algunas de las funciones permite que en lugar de tener que desplegar cada vez que haya cambios estos se vean reflejados en la interfaz cada vez que haya un cambio. 
 
El programa simula un servicio que falla, por lo que antes que ocurra una falla mandara un warning para posteriormente fallar y volver a funcionar. El usar una librería de tolerancia a fallas permite generar caminos alternativos ante un error, por lo que en caso de que ocurra un error se ejecutara otra función.
Retry es una función que permite realizar una petición n número de veces si ese numero de intentos obtiene una respuesta entonces continua si ocurre lo contrario entonces busca un camino alternativo.
Otra de las funciones es circuitbreaker el cual limita la cantidad de fallas que puede haber en el sistema. Si el sistema intenta realizar varias peticiones y estas no reciben respuesta después de dcierta cantidad de intentos entonces circuit breaker puede detener momentáneamente estas peticiones. 
Otra función es buildhead limita la cantidad de clientes que pueden realizar peticiones hasta que decida dar un camino alternativo.
Conclusión: Me pareció una herramienta interesante ya que facilita el uso de herramientas para el manejo de fallas, aunque al yo no estar familiarizado con el lenguaje me resulto algo mas complicado de codificar. Este tipo de herramientas me parecen interesantes creo que permiten automatizar la corrección de fallas al usar las herramientas adecuadas. 
Fuentes: 
https://www.arquitecturajava.com/jakarta-ee/
https://www.javatpoint.com/java-ee
https://stackoverflow.com/questions/2857376/difference-between-java-se-ee-me
https://www.educative.io/answers/what-is-jakarta-ee
https://www.tutorialspoint.com/spring_boot/spring_boot_introduction.htm
https://www.ionos.com/digitalguide/server/configuration/what-is-quarkus/
