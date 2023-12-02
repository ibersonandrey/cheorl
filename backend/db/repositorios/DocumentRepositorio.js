import { randomUUID } from "crypto";
import { DocumentCreateRequestModel, DocumentDataResModel, UsuarioCreateRequestModel } from "../../models/DocumentModels.js";
import { conexion } from "../connection/dbConection.js";

const crearDocumento = async (tarea) => {
    const con = conexion();
    if (tarea.id_user == 0) {
        throw "Usuario no valido";
    }
    const query = 'INSERT INTO tareas (id_user, tarea, name_tarea) VALUES (?, ?, ?)';

    try {
        const result = await con.query(query, [tarea.id_user, tarea.tarea, tarea.name_tarea ]);
        return true;
    } catch (err) {
        console.error('Error al insertar documento:', err);
        throw err;
    } finally {
        con.end();
    }
};

const getUsuario = () =>{
    return new Promise((resolve, reject) => {
        const con = conexion();
        let query = "SELECT * FROM user WHERE id_rol = 2";
        con.query(query, async (error, result) => {
            if (error) {
                console.error('Error al obtener documentos:', error);
                con.end();
                reject(error);
                return;
            }

            const obtenerDocumentos = async () => {
                const documentosPromesas = result.map(async (documentoRow) => {
                    try {
                        return new UsuarioCreateRequestModel(documentoRow);
                    } catch (error) {
                        throw error;
                    }
                });

                try {
                    const documentos = await Promise.all(documentosPromesas);
                    return documentos;
                } catch (error) {
                    throw error;
                }
            };

            try {
                const documentos = await obtenerDocumentos();
                con.end();
                resolve(documentos);
            } catch (error) {
                con.end();
                reject(error);
            }
        });
    });
}

const verDocumentos = () => {
    return new Promise((resolve, reject) => {
        const con = conexion();
        let query = "SELECT * FROM tareas";
        con.query(query, async (error, result) => {
            if (error) {
                console.error('Error al obtener documentos:', error);
                con.end();
                reject(error);
                return;
            }

            const obtenerDocumentos = async () => {
                const documentosPromesas = result.map(async (documentoRow) => {
                    try {
                        return new DocumentCreateRequestModel(documentoRow);
                    } catch (error) {
                        throw error;
                    }
                });

                try {
                    const documentos = await Promise.all(documentosPromesas);
                    return documentos;
                } catch (error) {
                    throw error;
                }
            };

            try {
                const documentos = await obtenerDocumentos();
                con.end();
                resolve(documentos);
            } catch (error) {
                con.end();
                reject(error);
            }
        });
    });
};

const findById = (id) => {
    return new Promise((resolve, reject) => {
        const con = conexion();
        let query = 'SELECT * FROM tareas WHERE id = ?'
        con.query(query, [id], async (error, result) => {
            if (error) {
                console.error('Error al obtener documentos:', error);
                con.end();
                reject(error);
                return;
            }

            const obtenerDocumentos = () => {
                return new Promise((resolve, reject) => {
                    const documentos = [];
                    const documentosPromesas = result.map(async (documentoRow) => {
                        try {
                            const documento = new DocumentCreateRequestModel(documentoRow);
                            resolve(documento);
                        } catch (error) {
                            reject(error);
                        }
                    });

                    Promise.all(documentosPromesas)
                        .then((documentos) => resolve(documentos))
                        .catch((error) => reject(error));
                });
            };

            obtenerDocumentos()
                .then((documentos) => {
                    con.end();
                    resolve(documentos);
                    console.log(documentos)
                })
                .catch((error) => {
                    con.end();
                    reject(error);
                });
        });
    });
};

export default { crearDocumento, verDocumentos, findById, getUsuario };
