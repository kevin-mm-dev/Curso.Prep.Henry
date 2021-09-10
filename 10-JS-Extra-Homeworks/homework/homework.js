// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  newArray=[];
  for (let clave in objeto){
    array=[clave,objeto[clave]]
    newArray.push(array);
  }

  return newArray;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  nombreVars=[];
  conteoVars=[];
  result={};
  arr=string.split('');
  arr.forEach(element => {
    if (nombreVars.includes(element)) {
      var ind=nombreVars.indexOf(element);
      conteoVars[ind]++;
    }else{
      nombreVars.push(element)
      conteoVars.push(1);
    }
  });
  for (let index = 0; index < nombreVars.length; index++) {
    result[nombreVars[index]]=conteoVars[index]
  }
  return result;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  mayus=[];
  mins=[];
  arr=s.split('');
  arr.forEach(element => {
    if (element===element.toUpperCase()) {
      mayus.push(element)
    }else{
      mins.push(element)
    }
  });
  return mayus.join('')+mins.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  completa="";
  separadas = str.split(' ');
  completa=separadas[0].split('').reverse().join('')
  for (let index = 1; index < separadas.length; index++) {
    completa+=" "+separadas[index].split('').reverse().join('')
  }
  return completa;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  rever=numero.toString().split('').reverse().join('')
  return rever==numero?"Es capicua":"No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  newArr=[];
  arr=cadena.split('')
  arr.forEach(element => {
    if (element!="a" && element!="b" && element!="c") {
      newArr.push(element)
    }
  });
  return newArr.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Ej: Recibe ---> ["Yo", "arwee", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  longMayor=0;
  newArr=[];
  auxArr=[];
  for (let index = 0; index < arr.length; index++) {
    auxArr=[];
    tamWord=arr[index].length;
    flag=true;
    for (let j = 0; j < newArr.length; j++) {
      if(tamWord<newArr[j].length){
          if (flag) {
            auxArr.push(arr[index])
          }
         flag=false;
         auxArr.push(newArr[j])
      }
      else{
        auxArr.push(newArr[j])
      }
    }
    newArr=auxArr;
    if (flag) {
      newArr.push(arr[index])
    }
  }
  return newArr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  newArr=[]
  arreglo1.forEach(element => {
    if (arreglo2.includes(element)) {
      newArr.push(element)
    }
  });
  return newArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

