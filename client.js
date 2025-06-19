const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Cargar el archivo .proto
const paqueteDefinido = protoLoader.loadSync('saludo.proto');
const saludoProto = grpc.loadPackageDefinition(paqueteDefinido).SaludoService;

// Crear cliente y conectar al servidor
const cliente = new saludoProto('localhost:50051', grpc.credentials.createInsecure());

// Llamar al método remoto
cliente.Saludar({ nombre: "Sebastian" }, (err, response) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(response.mensaje); // Salida esperada: ¡Hola, Sebastian!
  }
});
