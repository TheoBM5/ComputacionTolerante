# WorkFlow
## Prefect
### Desarrollo

Para el desarrollo de un Workflow mediante el lenguaje Python, se utiliza Prefect para la gestión del flujo de trabajo. 
Un flujo es un contenedor para la lógica del flujo de trabajo y permite a los usuarios interactuar y razonar sobre el estado de sus flujos de trabajo. Se representa en Python como una sola función.
Los flujos son como funciones. Pueden tomar entradas, realizar trabajo y devolver una salida. De hecho, puede convertir cualquier función en un flujo perfecto agregando el decorador @flow
Una task es una función que representa un trabajo distinto ejecutado dentro de un flujo. 
Si se coloca toda la lógica del flujo de trabajo en una sola función de flujo y falla alguna línea de código, todo el flujo fallará y se deberá volver a intentar desde el principio. Esto se puede evitar dividiendo el código en varias tareas.  
Al igual que con cualquier función estándar de Python, se puede pasar parámetros a una función de flujo, que luego se usan en otras partes del flujo. 


![alt text](https://github.com/TheoBM5/ComputacionTolerante/tree/main/Workflow/Recursos/image1.jpg?raw=true)

Instalaciones 
