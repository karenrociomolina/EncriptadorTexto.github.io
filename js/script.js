const inputTexto = document.querySelector(".ingresar-texto__input");
const mensaje = document.querySelector(".ingresar-texto__input2");

const imagen = document.querySelector(".container-aside__imagen");
const texto = document.querySelector(".texto");

function btnencriptar(){
    imagen.classList.add("desaparecer");
    texto.classList.add("desaparecer");
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}

function btndesencriptar(){
    imagen.classList.add("desaparecer");
    texto.classList.add("desaparecer");
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][1])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringParaDesencriptar;
}


const textoCopiado = document.getElementById("copiarTexto");
const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", function(event){
    imagen.classList.remove("desaparecer");
    texto.classList.remove("desaparecer");
    textoCopiado.select();
    document.execCommand("copy");
    mensaje.value = "";
})
    