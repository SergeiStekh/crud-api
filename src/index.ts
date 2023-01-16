import * as dotenv from 'dotenv'
dotenv.config();
import server from "./server/server";
const appServer = server.startServer();

export default {}