"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tslog_1 = require("tslog");
// Configuration
const configuration_1 = __importDefault(require("./configuration"));
// Routes
const operations_1 = __importDefault(require("./routes/operations"));
// XXX Research monitoring solutions
const app = (0, express_1.default)();
const log = new tslog_1.Logger({ name: "Logger" }); // XXX Implement functionality to ship logs
app.use('/', operations_1.default);
app.listen(configuration_1.default.PORT, () => {
    log.info(`listening on port ${configuration_1.default.PORT}`);
});
//# sourceMappingURL=index.js.map