import { Router } from "express";
import {
  renderSignUpForm,
  signup,
  renderSigninForm,
  renderpaisForm,
  renderpaisForm1,
  renderpaisForm2,
  renderpaisForm3,
  renderSigningrupos,
  renderSigninsedes,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.get("/auth/signup", renderSignUpForm);

router.post("/auth/signup", signup);

router.get("/auth/signin", renderSigninForm);
router.get("/auth/pais", renderpaisForm);
router.get("/auth/pais1", renderpaisForm1);
router.get("/auth/pais2", renderpaisForm2);
router.get("/auth/pais3", renderpaisForm3);

router.get("/auth/grupos", renderSigningrupos);

router.get("/auth/sedes", renderSigninsedes);


router.post("/auth/signin", signin);

router.get("/auth/logout", logout);
/*
router.get("/auth/change", renderChangePassw);
router.post("/auth/change", change);*/
export default router;
