import User from "../models/User.js";
import passport from "passport";

export const renderpaisForm = (req, res) => {
  const tp = false;
  const pa = false;
  const ad = false;
  const ini = true;
  const pais = "Bolivia"
  console.log(tp, pais, ad, ini)
  res.render("auth/pais", {pa ,tp, ad, ini, pais });}



export const renderpaisForm1 = (req, res) => {
  const tp = false;
  const pa = true;
  const ad = false;
  const ini = true;
  const pais = "Colombia"
  res.render("auth/pais1", {pais ,tp, ad, pa, ini});}

export const renderpaisForm2 = (req, res) => {
  const tp = false;
  const pa = true;
  const ad = false;
  const ini = true;
  const pais = "Ecuador"
  res.render("auth/pais2", {pais ,tp, ad, pa, ini});}

export const renderpaisForm3 = (req, res) => {
  const tp = false;
  const pa = true;
  const ad = false;
  const ini = true;
  const pais = "Peru"
  res.render("auth/pais3", {pais ,tp, ad, pa, ini});};


export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = async (req, res) => {


  const { name, apellido, email, tipo_usuario, pais, termsAndConditions, ciudad, farmacia} = req.body;
  console.log(pais);
  console.log(req.body.pais);
  if (req.body.pais = "") { 
    req.flash("error_msg", "Debe Seleccionar su pais.");
    return res.redirect("/auth/signup");

  }

  if (termsAndConditions != "on") {
    req.flash("error_msg", "Debe Leer y aceptar los términos y condiciones .");
    return res.redirect("/auth/signup");


  }

  console.log("pais",req.body.pais);
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
 
    req.flash("error_msg", "El Email ya existe.");
    return res.redirect("/auth/signup");
  }

  let errors = [];

//  const { name, apellido, email, tipo_usuario} = req.body;
  const newUser = new User({ name, apellido, email,  tipo_usuario, pais, ciudad, farmacia}); 
  newUser.tipo_usuario = "Jugador";
  newUser.password = "1234";
  newUser.puntos=0;
  newUser.posicion = 0;
  await newUser.save();
  
  req.flash("success_msg", "Registro Completado");
  //envio del email a administrador para aprobar


  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => {
  const pais = true;
  const tp = true;
  res.render("auth/signin", {pais, tp});}

export const renderSigningrupos = (req, res) =>   { 
  const ini = true; 
  res.render("auth/grupos", {ini});}

  export const renderSigninsedes = (req, res) => { 
    const ini = true; 
    res.render("auth/sedes", {ini});}
  


export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Cerrando Sesión");

      res.redirect("/");
  });
};



  