"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = '<span>Hola, ${getUsers()[0].username}</span>';
        document.getElementById('addGalleryButtonContainer').innerHTML = '<button class="btn btn-primary btn-block">Agregar foto</button>';
    }
}
exports.default = default_1;
