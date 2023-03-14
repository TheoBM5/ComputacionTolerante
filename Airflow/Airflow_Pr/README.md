Airflow
Apache Airflow es una plataforma que permite la orquestación de flujos de trabajo, donde cada flujo de trabajo se puede observar mediante un Grafo Acíclico Dirigido (DAG).

P R E I N S T A L A C I O N E S 
Para el desarrollo de la práctica se hizo uso de: 
• Docker 
• Apache Airflow
Desarrollo lo primero que se realizo fue crear una carpeta para el proyecto y ejecutar este comando
curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.5.1/docker-compose.yaml'
Después siguiendo la documentación de airflow  se tienen que crear 3 carpetas
mkdir -p ./dags ./logs ./plugins
Se cambiaron ciertos parámetros del archivo para ejecutar airflow de forma local, además de eliminar ciertos parámetros.  Se hizo compose del archivo Docker y se empezó a ejecutar.
 
Entrando al puerto 8080 pude acceder a la interfaz de airflow 

Codigo
 


Dentro del archivo de la configuración, importamos varias librerías para la configuración de fechas y horas, además de PythonOperator que permite manejar las tareas como un flujo de trabajo, junto con el export del archivo del cuál se hace la extracción del procesamiento ETL
Luego definimos los argumentos que serán establecidos como default, los cuáles permitirán ser pasados a la configuración del DAG de Airflow; en dichos argumentos se establecen del DAG la fecha de inicio, el email y nombre del propietario, los números de intentos que se permitirán por si el DAG falla, además de que regrese cuál es el tipo de error por si el DAG falla.
 
Para la configuración del DAG, también definimos un nombre, argumentos, una descripción y el intervalo en el que queramos que se realice dicho flujo, el cuál para este caso se especificó que sería diariamente. 

 

Para la base del export del ETL, generamos un conector con Spotify mediante la librería spotipy, validando que la información que se está dando como argumentos el id del cliente, el url y permisos del usuario que interactúa con la lista de las ultimas canciones escuchadas por el usuario, son válidos.
De esta manera, podemos acceder a la información de las canciones y extraer dicha información con el Token y Id obtenido de Spotify que pertenece a nuestro usuario.
 
 

Una vez teniendo la configuración del DAG y las tareas a realizar, ejecutamos Airflow y desplegamos el Webserver para poder observar el DAG. Como se puede observar la recolección de las tareas por hacer que tiene el DAG.
 
 


C O N C L U S I Ó N
Apache Airflow es una herramienta bastante util para el manejo de los flujos de trabajo, fue algo complicada su instalación en comparación con la anterior herramienta prefect. Al no poder instalar de forma local tuve que usar Docker. Creo que resulto más sencillo encontrar documentación sobre prefect que de airflow, aunque por otro lado airflow tenia mas ejemplos que me ayudaron a entender como usar esta herramienta 
Fuentes
Karolina Sowinska (Noviembre, 2020). “Airflow for Beginners - Run Spotify ETL Job in 15 minutes!”. Recuperado el 05/10/22. Obtenido del URL: https://www.youtube.com/watch?v=i25ttd32-eo
