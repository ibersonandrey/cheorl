import React, { useState } from "react";
import {  CREAR_DOCUMENTO_POST_ENDPOINT, OBTENER_USUARIO_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import axios from "axios";
import { useEffect } from "react";

function DocumentFomr() {
  const [id_user, setUser] = useState("");
  const [tarea, setTarea] = useState("");
  const [name_tarea, setNameTarea] = useState("");
  const [documentos, setDocumentos] = useState([]);

  const obtenerFormularios = async () => {
    try {
      const response = await axios.get(OBTENER_USUARIO_GET_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error("Error al obtener formularios:", error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await obtenerFormularios();
        console.log(data);
        setDocumentos(data);
      } catch (error) {
      } finally {
     //   setBuscando(false);
      }
    };

    fetchData();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id_user,
      tarea,
      name_tarea,
    };
    //return console.log(data);
    try {
      axios
        .post(CREAR_DOCUMENTO_POST_ENDPOINT, data)
        .then((respose) => console.log(respose))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <select className="form-select" onChange={(e)=> setUser(e.target.value)}>

            <option value={0}>Seleccione</option>
            {documentos.map((documentos,index) =>{
              return <option key={index} value={documentos.id}>{documentos.name_user}</option>
            })}
          </select>
          
        </div>
          <div className="col">
            <div className="mb-3">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={name_tarea}
                onChange={(e) => setNameTarea(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label>Descripción:</label>
              <textarea
                className="form-control"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
              />
            </div>
          </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default DocumentFomr;
