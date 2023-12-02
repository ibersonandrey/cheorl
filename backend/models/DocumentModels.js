class DocumentCreateRequestModel {
    constructor(tarea) {
        this.id = tarea.id;
        this.tarea = tarea.tarea;
        this.name_tarea = tarea.name_tarea;
        this.id_user = tarea.id_user;
    }
}

class UsuarioCreateRequestModel {
    constructor(usuario) {
        this.id = usuario.id_user;
        this.name_user = usuario.name_user;
        this.email_user = usuario.email_user;
    }
}

class DocumentDataResModel {
    constructor(document) {
        this.document = document
    }
}

export {DocumentCreateRequestModel,UsuarioCreateRequestModel, DocumentDataResModel}