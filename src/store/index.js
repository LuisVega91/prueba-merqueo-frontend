
import { createStore } from 'vuex'

export default createStore({
  state: {
    _user: {
      id: 12345,
      usuario: 'Luis',
      foto: 
      'https://picsum.photos/id/' +
      Math.floor(Math.random() * 10) +
      '/400/400'
    
    },
    _posts: [
      {
        id: 1,
        usuario: {
          id: 1,
          nombre: "Luis Vega",
          foto: "https://picsum.photos/200/300",
        },
        data: {
          contenido: "hola mundo - Contenido Post",
          fecha_creacion: '2020-10-12  14:00',
        },
        comentarios: [
          {
            id: 1,
            usuario: {
              nombre: "Luis Vega",
              foto: "https://picsum.photos/200/300",
            },
            contenido: "Hola mundo - Vega",
            fecha_creacion: "2020-10-15",
          },
          {

            id: 2,
            usuario: {
              nombre: "Gustavo Espitia",
              foto: "",
            },
            contenido: "Hola mundo - Gustavo",
            fecha_creacion: "2020-10-15",
          },
          {
            id: 3,
            usuario: {
              nombre: "Alberto Luis",
              foto: "https://picsum.photos/id/8/200/300",
            },
            contenido: "Hola mundo - Alberto",
            fecha_creacion: "2020-10-15",
          },
        ],
        reaciones: {
          cantidadComentarios: 100,
          cantidadReaciones: []
        },
      }
    ],
    get posts() {
      return this._posts
    },
    get user(){
      return this._user
    }
  },
  mutations: {
    guardarPost(state, value) {
      state._posts.push(value)
    },
    guardarComentario(state, value) {

      let comentario = {
        usuario: {
          id: state._user.id,
          nombre: state._user.usuario,
          foto: state._user.foto,
        },
        contenido: value[0],
        fecha_creacion: new Date(),
      };
      let post = state._posts.find(element => element.id == value[1]);
      post.comentarios.push(JSON.parse(JSON.stringify(comentario)));
    },
    guardarReacion(state, value) {
      let reaccion = {
        usuario_id: state._user.id,
        tipo: value.tipo,
      };
      let post = state._posts.find(element => element.id == value.id);
      if (post) {

        let posicion = post.reaciones.cantidadReaciones.map(element => element.usuario_id).indexOf(state._user.id);
        if (posicion < 0) {
          post.reaciones.cantidadReaciones.push(JSON.parse(JSON.stringify(reaccion)));
        } else {
          let reaccionUsuario = post.reaciones.cantidadReaciones[posicion];
          if (reaccionUsuario.tipo === value.tipo) {
            post.reaciones.cantidadReaciones.splice(posicion, 1)
          } else {
            post.reaciones.cantidadReaciones.splice(posicion, 1)
            post.reaciones.cantidadReaciones.push(JSON.parse(JSON.stringify(reaccion)));
          }
        }
      }
    },
    guardarPerfil(state, value){

      let user = {
        id:value.id,
        usuario: value.usuario,
        foto: value.foto
      }
      
      state._user = user
    }
  },
  actions: {

  },
  modules: {
  }
})
