import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 2060;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/qluminovafar';
