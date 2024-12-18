export interface Envio {
  idEnvio: number;
  origen: {
    idDireccion: number;
    calle: string;
    colonia: string;
    numero: string;
    codigoPostal: string;
    ciudad: string;
    estado: string;
  };
  destino: {
    idDireccion: number;
    calle: string;
    colonia: string;
    numero: string;
    codigoPostal: string;
    ciudad: string;
    estado: string;
  };
  cliente: {
    id: number;
    telefono: string;
    persona: {
      idPersona: number;
      nombre: string;
      apellidoPaterno: string;
      apellidoMaterno: string;
    };
  };
  conductor: {
    idColaborador: number;
    noPersonal: string;
    persona: {
      idPersona: number;
      nombre: string;
      apellidoPaterno: string;
      apellidoMaterno: string;
      correo: string;
      CURP: string;
    };
  };
  costo: number;
  fecha: string;
  fechaEntrega: string;
  numGuia: string;
  paquetes: [];
  estadoEnvios: [];
}


