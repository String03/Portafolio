import {getUsers} from './users';

export default function(){
    if(localStorage.username ){
        document.getElementById('loginModalButtonContainer')!.innerHTML = '<span>Hola, ${getUsers()[0].username}</span>';
         document.getElementById('addGalleryButtonContainer')!.innerHTML = '<button class="btn btn-primary btn-block">Agregar foto</button>'
                                                                            '<button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar Sesión</button>';
   
    
    
    
    }
}


