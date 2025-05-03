/* eslint-disable no-undef */
import { config } from "dotenv";

config({path:`.env`});

export const {
    PORT,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    DB_URI,
    COOKIE_KEY,
} = process.env;