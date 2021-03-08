<template>
  <header class="encabezado">
    <span class="encabezado--titulo">Domicilios Test</span>
    <nav class="main-nav">

      <div
        class="encabezado--button"
        @click="menuClose = !menuClose"
        v-if="menuClose"
      >
        <i class="fa fa-bars"></i>
      </div>
      <div
        class="encabezado--button"
        @click="menuClose = !menuClose"
        v-if="!menuClose"
      >
        <i class="fa fa-times"></i>
      </div>
      <ul class="main-nav--menu" v-bind:class="{ hidden__mobile: menuClose }">
        <li>
          <a href="#" @click="showModal = true"
            ><small>Hola {{ user.usuario.toUpperCase() }}</small></a
          >

          <div class="modal" v-bind:class="{ hidden: !showModal }">
            <div class="modal-content">
              <span class="modal-close" @click="showModal = false"
                >&times;</span
              >
              <h1>Cambio de Usuario</h1>
              <br />
              <input type="text" placeholder="Nombre" v-model="usuario" />
              <hr />
              <small>Nombre Usuario</small>
              <br />
              <br />
              <input type="url" placeholder="url foto" v-model="foto" />
              <hr />
              <small>URL Foto</small>
              <br />
              <br />
              <input type="number" placeholder="Identificacion" v-model="identificacion" />
              <hr />
              <small>Numero ID Unico</small>
              <br />
              <button @click="guardarPerfil">Cambiar</button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>

  <router-view class="container" />
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      identificacion:0,
      usuario: "",
      foto: "",
      menuClose: true,
      showModal: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    this.identificacion = this.user.id;
    this.usuario = this.user.usuario;
    this.foto = this.user.foto;
  },
  methods: {
    guardarPerfil() {

      this.showModal = false;
      let newUser = {
        id: this.identificacion,
        usuario: this.usuario,
        foto: this.foto,
      };

      this.$store.commit("guardarPerfil", newUser);
    },
  },
};
</script>

<style lang="scss" src="./scss/main.scss"></style>