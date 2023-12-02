import DocumentRepositorio from "../db/repositorios/DocumentRepositorio.js";

const verDocumentos = () => {
    return new Promise((resolver, rechazar) => {
        resolver(DocumentRepositorio.verDocumentos())
    })
}
const getUsuarios = () => {
    return new Promise((resolver, rechazar) => {
        resolver(DocumentRepositorio.getUsuario())
    })
}

const crearDocumento = (tarea) => {
    return new Promise(async (resolver, rechazar) => {
        try {
            const nuevoDocumento = await DocumentRepositorio.crearDocumento(tarea);
            resolver(nuevoDocumento);
        } catch (error) {
            rechazar(error.message);
        }
    });
};

export default {verDocumentos, crearDocumento,getUsuarios}