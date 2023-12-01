//importamos el archivo db.js donde estan nuestros registros para ser mostrados en la api
const registros = require('../../../DB/db')
//Exportamos una funcion con el metodo Get que nos permitira ver los registros
//en nuestro front al ser consultada la ruta "/api/names".
export async function GET(Request) {

  
  return new Response(JSON.stringify(registros))
}