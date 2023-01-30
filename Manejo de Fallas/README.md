Manejo de Errores en Rust
Rust agrupa los errores en dos categorías principales
Recoverable & Unrecoverable
Errors


Recuperable
Como un error de archivo no encontrado, lo más probable es que solo queramos informar el problema al usuario y volver a intentar la operación.

Irrecuperable
Los errores irrecuperables son siempre síntomas de errores, como intentar acceder a una ubicación más allá del final de una matriz, por lo que queremos detener el programa de inmediato operación.

Hay dos formas de causar pánico en la práctica: realizando una acción que provoque pánico (como acceder a una matriz más allá del final) o llamando explícitamente a panic! macro.
De forma predeterminada, estos avisos graves imprimirán un mensaje de error, se desenrollarán, limpiarán la pila y se cerrarán




La llamada pánico! provoca el mensaje de error contenido en las dos últimas líneas. 
La primera línea muestra el mensaje de pánico y el lugar en el código fuente donde ocurrió el pánico: src/main.rs:2:5 



La biblioteca estándar de Rust proporciona una enumeración Option<T> que se usa cuando la ausencia de un valor es una posibilidad. 
Option<T> para enlaces que posiblemente no tengan ningún valor
Result<T, E> para resultados de operaciones que pueden generar errores  
T, E son genéricos. T puede ser cualquier valor, E puede ser cualquier error. Las dos variantes Ok y Err están disponibles globalmente.

  
  
  Cuando abrimos un archivo desde la ruta, puede devolver un identificador de archivo para que funcione con Ok (archivo), o provoca un error Err (e).
 Con match f nos vemos obligados a lidiar con los dos estados posibles. O asignamos el identificador de archivo a f o regresamos de la función devolviendo el error. 
Luego leemos el contenido en s, la cadena que se acaba de crear. De nuevo, puede tener éxito o arrojar un error. La función f.read_to_string devuelve la longitud de los bytes leídos, por lo que podemos ignorar el valor con seguridad y devolver un Ok(s) con la lectura de la cadena. 
unwrap() and expect()
La función unwrap() devuelve el resultado real de una operación exitosa. Devuelve un pánico con un mensaje de error predeterminado si falla una operación.

  
  La función expect() es similar a unwrap(). La única diferencia es que se puede mostrar un mensaje de error personalizado usando expect.
