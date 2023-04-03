"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const db_1 = require("../dataBase/db");
async function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send("Campo authorization obrigatório");
    }
    const token = authorization.replace('Bearer ', '');
    if (!token)
        return res.status(401).send('não tem token');
    try {
        const session = await db_1.sessionsCollection.findOne({ token });
        if (!session)
            return res.status(401).send('não tem sessão');
        return next();
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=Auth.middleware.js.map