<template>
  <div>
    <div class="escribir-post--container" v-bind:class="{ error: inputError }">
      <textarea
        rows="1"
        @focus="showInputLogo = true"
        @blur="showInputLogo = escribir_post"
        class="escribir-post--container--input scrollable"
        placeholder="Escribe aqui tu estado"
        v-model="escribir_post"
        v-on:keyup.enter="guardarPost"
      ></textarea>
      <i @click="guardarPost"
        v-if="showInputLogo"
        class="fa fa-paper-plane escribir-post--container--logo"
      ></i>
    </div>

    <footer class="escribir-post--footer">
      <button @click="guardarPost">Publicar</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "EscribirPost",
  data() {
    return {
      escribir_post: "",
      inputError: false,
      showInputLogo: false
    };
  },

  methods: {
    guardarPost() {
      this.escribir_post = this.escribir_post.trim();
      if (this.escribir_post) {
        let datos = {
          id: this.$store.state.posts.length + 1,
          usuario: {
            id: this.$store.state.posts.length + 1,
            nombre: this.$store.state.user.usuario,
            foto: "https://picsum.photos/200/300",
          },
          data: {
            contenido: this.escribir_post,
            fecha_creacion: new Date().toISOString(),
          },
          comentarios: [],
          reaciones: {
            cantidadComentarios: 0,
            cantidadReaciones: [],
          },
        };
        this.$store.commit("guardarPost", datos);
        this.escribir_post = "";
      } else {
        this.escribir_post = "";
        this.cantPostNotification();
      }
    },
    cantPostNotification() {
      this.inputError = true;
      setTimeout(() => (this.inputError = false), 500);
    },
  },
};
</script>