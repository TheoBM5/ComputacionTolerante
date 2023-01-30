fn main(){
    let result = es_par(10).unwrap();
    println!("resultado es {}",result);
    println!("Fin");
 }
 fn es_par(no:i32)->Result<bool,String> {
    if no%2==0 {
       return Ok(true);
    } else {
       return Err("No es par".to_string());
    }
 }


use std::fs::File;
fn main(){
   let f = File::open("pqr.txt").expect("El archivo no se puede abrir");
   //file does not exist
   println!("fin");
}



