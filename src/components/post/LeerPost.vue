<template >
  <article>
    <aside>
      <img
        class="user--image"
        :src="usuario.foto || require('@/assets/img/no-user-picture.svg')"
        alt="user-picture"
      />
    </aside>
    <main class="post--content">
      <header class="post--conten--header">
        <span>{{ usuario.nombre }}</span>
        <br />
        <small>{{ fecha(data.fecha_creacion) }}</small>
      </header>
      <br />
      <p>{{ data.contenido }}</p>
      <br />
    </main>
  </article>
</template>
<script>
import moment from "moment";
export default {
  name: "LeerPost",
  props: {
    usuario: Object,
    data: Object,
  },
  methods: {
    fecha(value) {
      return moment(value, "YYYY-MM-DDThh:mm:ss")
        .utc(true)
        .locale("es")
        .fromNow();
    },
  },
};
</script>