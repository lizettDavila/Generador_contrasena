let button = document.getElementById('generar');

const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function generar(){
    let cantidad = Number(document.getElementById('cantidad').value);
    let contraseña = document.getElementById('contrasena');

    if(cantidad < 8 ){
        alert('La contraseña debe ser mayor a 8.');
    }

    let contrasena = ''
    for(let i = 0; i < cantidad; i++){
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random()*cadenaDeCaracteres.length)]
        contrasena+=caracterAleatorio;
    }

    contraseña.value = contrasena;

}









