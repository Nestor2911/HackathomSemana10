//Ejercicio01
const concatenado = (nombre, apellido, edad) => "Hola mi nombre es " + nombre + " " + apellido + " y mi edad es " + edad
        let name = prompt("Ingrese su nombre: ")
        let lastname = prompt("Ingrese su apellido: ")
        let age = prompt("Ingrese su edad: ")

        console.log(concatenado(name, lastname, age))
        alert("Hola mi nombre es " + name + " " + lastname + " y mi edad es " + age);


//ejercicio02
function sumaCubos(...rest) {
    let numeros = [...rest]
    let numerosCubo = numeros.map(elevarAlCubo)

    function elevarAlCubo(value) {
        return value ** 3
    }

    let suma = 0
    numerosCubo.forEach(function (numero) {
        suma += numero
    })
    alert('La suma de cubos es ' + suma);
    return suma
}

console.log(sumaCubos(1, 5, 9))

//Ejercicio03
function tipoDato(dato) {
    let tipo = typeof (dato)
    return tipo
}
console.log("El tipo de dato es: ", tipoDato("hola"))
console.log("El tipo de dato es: ", tipoDato(1))
console.log("El tipo de dato es: ", tipoDato([1, 2, 3]))

//Ejercicio04
function sum(...rest) {
    let valor = 0;
    for (let n of rest) valor += n;
    console.log(valor);

    alert('La cadena a sumar es (1, 22, 33, 44, 55), y la suma es '+valor);
}

sum(1, 22, 33, 44, 55);

//Ejercicio05
function excluirString(...rest) {
    let datos = [...rest]
    let numeros = datos.filter(soloNumber)
    function soloNumber(value) {
      if (typeof value !== "number") {
        return false
      }
      return value
    }
    return numeros
    
  }
  console.log(excluirString(1, 2, "Nestor",3, 4, 5, 6))

  //Ejercicio06
  function devolverMinMax(a, b) {
    a = Math.min(...num)
    b = Math.max(...num)
    return [a, b]
}

let num = [1, 2, 3, 4, 5]
console.log(devolverMinMax(num))

//Ejercicio07
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        num = numeros.join('')
        var a = num.slice(0, 3);
        var b = num.slice(3, 6);
        var c = num.slice(6, 10);
        console.log("(" + a + ") " + b + "-" + c)
        alert("(" + a + ") " + b + "-" + c);


//Ejercicio08
function mayorNumero([a, b, c]) {
    n1 = Math.max(...a)
    n2 = Math.max(...b)
    n3 = Math.max(...c)
    console.log([n1, n2, n3])
    alert('El valor mayor de cada matriz es ['+[n1, n2, n3]+']')
}

mayorNumero([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

//Ejercicio09
function primerUltimo() {
    text = "circumlocution";
    a = text.indexOf('c');
    b = text.lastIndexOf('c');
    console.log([a, b])

    alert('The first "c" has index ' + a + ' The last "c" has index ' + b);


}
primerUltimo()

//Ejercicio10
function convertirObjeto() {
    let toArray = { a: 1, b: 2 }
    num1 = toArray.a
    num2 = toArray.b
    console.log(["a", num1], ["b", num2])
}
convertirObjeto()


//Ejercicio11
let arr = [{ name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
        ]

        function sumaPresupuestos() {
            let total = 0
            for (let n = 0; n < arr.length; n++) {
                total += arr[n].budget;

            }

            console.log(total)
        }
        sumaPresupuestos()

//Ejercicio12
let arr = [{ name: "Steve" },
        { name: "Mike" },
        { name: "John" }
        ];
        let arra = []

        function cadenaNombres() {
            for (let n = 0; n < arr.length; n++) {
                arra.push(arr[n].name);

            }
            console.log(arra)
        }

        cadenaNombres()



//Ejercicio13
let arr = {
    likes: 2,
    dislikes: 3,
    followers: 10
}
function matrizClavesyValores() {
    console.log(Object.entries(arr))
}
matrizClavesyValores()


//Ejercicio14
function sumaCuadrados() {
    let total = 0
    let a = 3
    for (let n = 0; n < a + 1; n++) {
        total += n * n
    }
    console.log(total)
}
sumaCuadrados()


//Ejercicio15
function multiplicarMatriz() {
    let num = [2, 3, 1, 0];
    for (let n = 0; n < num.length; n++) {

        num[n] = num[n] * num.length;
    }
    console.log(num);
    alert('[' + num + '] ');
}

multiplicarMatriz()


//Ejercicio16
function cuentaRegresiva() {
    let countdown = []
    let number = prompt("Ingresar el número ");
    for (let n = 0; n <= number; n++) {

        countdown.push(n)
    }
    console.log(countdown.reverse(countdown));
    alert(countdown);
}
cuentaRegresiva()


//Ejercicio17
function diferenciaEntreNumeros() {
    let diffMaxMin = [10, 4, 1, 4, -10, -50, 32, 21]
    a = Math.min(...diffMaxMin)
    b = Math.max(...diffMaxMin)

    let total = b - a
    console.log(a);
    console.log(b);
    console.log(total);
    alert('El número mas pequeño es ' + a + ', El número mas grande es ' + b + ' La diferencia es ' + total);
}
diferenciaEntreNumeros()

//Ejercicio18
var cadena = [1, 2, 3, "x", "y", 10];
        function eval(num) {
            return typeof num == 'number';
        }
        function matrizEnteros() {
            console.log(cadena.filter(eval));
        }
        matrizEnteros()

//Ejercicio19
function repetirElemento(elemento, tiempo) {
    let repeat = []
    for (let n = 0; n < tiempo; n++) {
        repeat.push(elemento)
    }
    console.log(repeat);
    alert('['+repeat+']');
}
repetirElemento(13, 8)