use std::{env, fs::File, path::Path};

fn main() {
    let args: Vec<_> = env::args().collect();
    let pattern = &args[1];

    if let Some(a) = env::args().nth(2) {
        let path = Path::new(&a);
        let mut file = File::open(&path);
        let mut s = String::new();
        file.read_to_string(&mut s);
        println!("{:?}", s);
    } else {
        //do something
    }
}