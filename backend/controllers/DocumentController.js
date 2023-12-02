import { Router } from "express";
import respuestasHttp from "../utils/respuestasHttp.js";
import DocumentService from "../services/DocumentService.js";
import {
  DocumentCreateRequestModel,
  DocumentDataResModel,
} from "../models/DocumentModels.js";
import DocumentRepositorio from "../db/repositorios/DocumentRepositorio.js";

const router = Router();

router.get("/get/tareas", (req, res) => {
  DocumentService.verDocumentos()
    .then((array) => {
      respuestasHttp.exito(req, res, array, 200);
    })
    .catch((err) => {
      respuestasHttp.error(
        req,
        res,
        "No es posible leer los documentos",
        err,
        400
      );
    });
});

router.get("/get/usuarios", (req, res) => {
  DocumentService.getUsuarios()
    .then((array) => {
      respuestasHttp.exito(req, res, array, 200);
    })
    .catch((err) => {
      respuestasHttp.error(
        req,
        res,
        "No es posible leer los documentos",
        err,
        400
      );
    });
});

router.post("/add", (req, res) => {
  DocumentService.crearDocumento(new DocumentCreateRequestModel(req.body))
    .then((document) => {
      respuestasHttp.exito(
        req,
        res,
        new DocumentCreateRequestModel(document),
        201
      );
    })
    .catch((err) => {
      respuestasHttp.error(
        req,
        res,
        "No es posible crear el documento",
        err,
        400
      );
    });
});

export default router;
