/* const miPromesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
        resolve("¡Operación exitosa!");
    } else {
        reject("Hubo un error.");
    }
});


miPromesa.then((mensaje) => {
    console.log(mensaje)
}).catch((error) => {
    console.log(error)
})



esperar(2000).then(() => console.log('Han pasado 2 segundos')) */

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//async / await

async function ejemploAsyncAwait() {
  try {
    console.log("Esperando....");
    await esperar(2000);
    console.log("han pasado 2 segundos");
  } catch (error) {
    console.log(error);
  }
}

ejemploAsyncAwait();



const obtenerUsuarios = () => {
    return fetch('https://randomuser.me/api/?results=5').then(response => response.json())
}

obtenerUsuarios().then(usuarios => {
    console.log('usuariosObtenidos', usuarios)
})


const obtenerUsuariosAsync = async() => {
    const response = await fetch('https://randomuser.me/api/?results=5')
    const data = await response.json()

}

obtenerUsuariosAsync()