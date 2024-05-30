import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/User.js";
//const status = "aprobado";
passport.use(
  new LocalStrategy(
    { usernameField: "email",
    },
      async (email, password, done) => {
      // Match Email's User
      console.log(email);
      const user = await User.findOne({ email: email });
      if (!user) {return done(null, false, { message: "Usuario no Existe o sin permiso de acceso" });}

      // Match Password's User
      /*const isMatch = await user.matchPassword(password);
      if (!isMatch) return done(null, false, { message: "Password Incorrecto" });*/

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {

  done(null, user.id);

});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
