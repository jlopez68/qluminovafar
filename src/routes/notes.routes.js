import { Router } from "express";
import {

  renderNotes,
  renderNotesqf,
  renderNotessf,
  renderNotesf,
  renderEditForm,
  updateNote,
  deleteNote,
  imprimirNote,
  imprimirNote1,
  imprimirNote2,
  imprimirNote3,
  imprimirNote4,
  imprimirNote5,
  imprimirNote6,
  imprimirNote7,

  renderVisualizarnotas
} from "../controllers/notes.controller.js";

import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// New Note


// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);
router.get("/notesqf", isAuthenticated, renderNotesqf);
router.get("/notessf", isAuthenticated, renderNotessf);
router.get("/notesf", isAuthenticated, renderNotesf);

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);


// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

// imprimir Notes
router.get("/notes/imprimir", isAuthenticated, imprimirNote);
router.get("/notes/imprimir1", isAuthenticated, imprimirNote1);
router.get("/notes/imprimir2", isAuthenticated, imprimirNote2);
router.get("/notes/imprimir3", isAuthenticated, imprimirNote3);
router.get("/notes/imprimir4", isAuthenticated, imprimirNote4);
router.get("/notes/imprimir5", isAuthenticated, imprimirNote5);
router.get("/notes/imprimir6", isAuthenticated, imprimirNote6);
router.get("/notes/imprimir7", isAuthenticated, imprimirNote7);

router.get("/notes/visualizar/:id", isAuthenticated, renderVisualizarnotas);


export default router;
