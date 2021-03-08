<template>

  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <escribir-post></escribir-post>
    <section class="post" v-for="post in posts.slice().reverse()" :key="post.id">
      <leer-post :usuario="post.usuario" :data="post.data" ></leer-post>
      <reaciones-comentarios-post :reaciones="post.reaciones" :comentarios="post.comentarios" :id="post.id"></reaciones-comentarios-post>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import EscribirPost from "@/components/post/EscribirPost.vue";
import LeerPost from "@/components/post/LeerPost.vue";
import ReacionesComentariosPost from "@/components/post/ReacionesComentariosPost.vue";


export default {
  name: "Home",

  components: {
    EscribirPost,
    LeerPost,
    ReacionesComentariosPost,
  },
  
   computed: {
    posts () {
      return this.$store.state.posts
    }
   }
};
</script>
