"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const auth_1 = require("../../lib/auth");
const getCurrentUser = async (headers) => {
    const session = await auth_1.auth.api.getSession({
        headers,
    });
    if (!session) {
        return null;
    }
    return session.user;
};
exports.authService = {
    getCurrentUser,
};
//# sourceMappingURL=auth.service.js.map