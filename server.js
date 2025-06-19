const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Cargar el archivo .proto
const paqueteDefinido = protoLoader.loadSync('saludo.proto');
const saludoProto = grpc.loadPackageDefinition(paqueteDefinido).SaludoService;

// Implementar la función del servicio
function saludar(call, callback) {
  const nombre = call.request.nombre;
  callback(null, { mensaje: `¡Hola, ${nombre}!` });
}

// Crear el servidor
const servidor = new grpc.Server();
servidor.addService(saludoProto.service, { Saludar: saludar });

// Iniciar el servidor en el puerto 50051
servidor.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Servidor gRPC escuchando en el puerto 50051');
  servidor.start();
});
