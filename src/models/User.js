import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, trim: true },
    apellido: { type: String, trim: true },
    segundo_apellido: { type: String, trim: true }, 
    tipo_usuario:{ type: String, trim: true },
    password: { type: String, required: true },
    puntos: {type: Number },
    posicion: {type: Number },
    pais: { type: String},
    farmacia: { type: String},
    ciudad: { type: String},

  },
  { 
    timestamps: true,
    versionKey: false,
  }
);
/*
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
*/
export default mongoose.model("User", UserSchema);
