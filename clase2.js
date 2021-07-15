// const userAge = 12;

// if (userAge >= 65) {
//     console.log('no debe esta jubilado')
// } else {
//     console.log('no tiene edad suficiente')
// }

// const isEnabled = userAge >= 18;

// const message = userAge >= 65 ? 'es jubilado' : 'no es jubilado';  //operador ternario debe tener opcion si cumple o si falla

// console.log(isEnabled,message)


//roles de usuario
//1 admin
// 2 user 
// 3 invitado

// const role = 1; //diferente a if
// switch (role) {
//     case 1:
//         console.log('es admin')
//     case 2:
//         console.log('es user')
//     default:
//         console.log('es invitado')
//         break; //si el caso se cumple no ejecuta el resto de los casos
// }

function test(arg=11) { //agregamos un valor por default 
    console.log(arg);
}

test();
test('hola');