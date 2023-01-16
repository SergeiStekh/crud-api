import * as dotenv from 'dotenv'
dotenv.config();
import server from "./server/server";
server.startServer();

export default {}