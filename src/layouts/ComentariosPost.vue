<template>
  <article
    class="post--comentarios"
    v-for="comentario in comentarios"
    v-bind:key="comentario.id"
  >
    <aside>
      <img
        class="user--image blanco"
        :src="
          comentario.usuario.foto || require('@/assets/img/no-user-picture.svg')
        "
        alt="user-picture"
      />
    </aside>
    <main>
      <span
        ><strong>{{ comentario.usuario.nombre }}</strong></span
      >
      &nbsp; <a>{{ comentario.contenido }}</a>
      <br />
      <small>{{ fecha(comentario.fecha_creacion) }}</small>
    </main>
  </article>
</template>
<script>
import moment from 'moment';
export default {

  name: "ComentariosPost",
  props: {
    comentarios: Map,
  },
  methods: {
    fecha(value) {
      return moment(value, "YYYY-MM-DDThh:mm:ss").utc(true).locale('es').fromNow();
    },
  },
  data() {
    return {};
  },
  
};
</script>