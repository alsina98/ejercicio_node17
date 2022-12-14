const nombre = 'Jordi'
const apellido = 'Alsina'
const obj_person = JSON.stringify({nombre: nombre, apellido: apellido})

// clave -> persona valor -> {"nombre": "Jordi", "apellido": "Alsina"} 
//sessionStorage.setItem('persona', obj_person)

// clave -> persona valor -> {"nombre": "Jordi", "apellido": "Alsina"} 
//localStorage.setItem('persona', obj_person)

// nombre personaCookie valor -> {"nombre": "Jordi", "apellido": "Alsina"} Expires -> 2022-12-14T21:32:00.000Z
// document.cookie = `personaCookie=${obj_person};expires=` + new Date(2022, 11, 14, 22, 36, 0, 0).toUTCString() // son las 21:34 -> 21:36
