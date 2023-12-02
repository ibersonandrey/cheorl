import { CCard, CButton, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/react'
import moment from 'moment'
import { OBTENER_DOCUMENTO_GET_ENDPOINT, OBTENER_TAREAS_GET_ENDPOINT } from '../../connections/helpers/endpoints';
import axios from 'axios';

const DocumentCard= ({documento})=>{

    /*const descargarDocumento = async (id) => {
          const response = await axios.get(`${OBTENER_TAREAS_GET_ENDPOINT}${id}`, {
            responseType: "blob",
          });
      
          const url = URL.createObjectURL(response.data);
          window.open(url, "_blank");

    }*/

    return(
    <CCard className="mt-3 mb-3">
        <CCardHeader className="mi-card">
            <CCardTitle>
                <strong>Tarea: {documento.name_tarea}</strong>
            </CCardTitle> 
        </CCardHeader>
        <CCardBody>  
            <CCardText>
               Descripción: {documento.tarea}
            </CCardText>
        </CCardBody>
    </CCard>

    )
}

export {DocumentCard}
