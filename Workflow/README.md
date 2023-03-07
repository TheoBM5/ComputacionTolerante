# WorkFlow
## Prefect
### Desarrollo

Para el desarrollo de un Workflow mediante el lenguaje Python, se utiliza Prefect para la gestión del flujo de trabajo. 
Un flujo es un contenedor para la lógica del flujo de trabajo y permite a los usuarios interactuar y razonar sobre el estado de sus flujos de trabajo. Se representa en Python como una sola función.
Los flujos son como funciones. Pueden tomar entradas, realizar trabajo y devolver una salida. De hecho, puede convertir cualquier función en un flujo perfecto agregando el decorador @flow
Una task es una función que representa un trabajo distinto ejecutado dentro de un flujo. 
Si se coloca toda la lógica del flujo de trabajo en una sola función de flujo y falla alguna línea de código, todo el flujo fallará y se deberá volver a intentar desde el principio. Esto se puede evitar dividiendo el código en varias tareas.  
Al igual que con cualquier función estándar de Python, se puede pasar parámetros a una función de flujo, que luego se usan en otras partes del flujo. 


![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Workflow/Recursos/image1.png?raw=true)
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Workflow/Recursos/image2.png?raw=true)

Se usara la funcion call_api() para llamar a la api y se movera la solicitud HTTP real a su propia tarea.
Usando una URL válida como parámetro. En este caso, enviamos una solicitud GET a una API que debería devolver JSON válido en la respuesta. 

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Workflow/Recursos/image3.png?raw=true)

Al ejecutar el programa se puede apreciar el estado de varias de las tareas, primero como se crea el flujo y como empieza su ejecución. Sucesivamente pasa con todas las tareas posteriores, esto nos permite saber el estado de cada función del programa.

![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Workflow/Recursos/image4.png?raw=true)
La API de Prefect supervisa la ejecución del flujo y captura el estado de ejecución del flujo para observarlo.
![alt text](https://github.com/TheoBM5/ComputacionTolerante/blob/main/Workflow/Recursos/image5.png?raw=true)
La interfaz de usuario de Prefect muestra mucha información útil sobre las ejecuciones de flujo, que incluyen: Advertencias para ejecuciones tardías o fallidas Detalles de la ejecución de la tarea Visor de flujo de radar y dependencia de tareas.
