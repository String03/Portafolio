"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(dbUser, formInfo) {
    if (formInfo.username === dbUser.username) {
        if (formInfo.password === dbUser.password) {
            localStorage.setItem('username', formInfo.username);
            //loggedIn();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
