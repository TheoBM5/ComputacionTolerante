fn main(){
    let result = is_even(13);
    match result {
       Ok(d)=>{
          println!("No es par{}",d);
       },
       Err(msg)=>{
          println!("Mensaje de error {}",msg);
       }
    }
    println!("Fin del programa");
 }
 fn is_even(no:i32)->Result<bool,String> {
    if no%2==0 {
       return Ok(true);
    } else {
       return Err("No es par".to_string());
    }
 }