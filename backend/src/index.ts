import express from "express";
import { Logger } from "tslog";

// Configuration
import Config from "./configuration"

// Routes
import operations from "./routes/operations";

// XXX Research monitoring solutions

const app = express();
const log: Logger  = new Logger({ name: "Logger" }) // XXX Implement functionality to ship logs
app.use('/', operations)


app.listen( Config.PORT, () => {
    log.info(`listening on port ${Config.PORT}`)
})