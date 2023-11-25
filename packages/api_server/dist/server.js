"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.API_SERVER_PORT || 9001;
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.get('/', (_req, res) => {
    res.json([
        { id: 0, name: 'Alice' },
        { id: 1, name: 'Bob' },
    ]);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
