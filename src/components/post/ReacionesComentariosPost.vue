<template>
  <div>
    <div class="swaper">
      <footer class="post--conten--footer swaper--child">
        <!-- @click="guardarReacion"  -->
        <button class="button__white" @click="showModal = true">
          Reaccionar
        </button>

        <div class="modal" v-bind:class="{ hidden: !showModal }">
          <!-- Modal content -->
          <div class="modal-content">
            <span class="modal-close" @click="showModal = false">&times;</span>
            <h1>Seleccione una Reaccion</h1>
            <main class="post--estado--reaccion">
              <img
                class="post--estado--reaccion--icon big"
                src="@/assets/img/reaccion-blue.svg"
                alt=""
                @click="guardarReacion('blue')"
              />
              <img
                class="post--estado--reaccion--icon big"
                src="@/assets/img/reaccion-red.svg"
                alt=""
                @click="guardarReacion('red')"
              />
              <img
                class="post--estado--reaccion--icon big"
                src="@/assets/img/reaccion-yellow.svg"
                alt=""
                @click="guardarReacion('yellow')"
              />
            </main>
          </div>
        </div>

        <button class="button__white" @Click="focusInput">Comentar</button>
      </footer>
      <div class="post--estado">
        <div class="post--estado--reaccion swaper--child">
          <img
            class="post--estado--reaccion--icon"
            id="reaccion-blue"
            src="@/assets/img/reaccion-blue.svg"
            alt=""
          />
          <img
            class="post--estado--reaccion--icon"
            id="reaccion-red"
            src="@/assets/img/reaccion-red.svg"
            alt=""
          />
          <img
            class="post--estado--reaccion--icon"
            id="reaccion-yellow"
            src="@/assets/img/reaccion-yellow.svg"
            alt=""
          />
          &nbsp;<span class="post--estado--reaccion--cantidad"
            ><strong>{{ reaciones.cantidadReaciones.length }}</strong></span
          >
        </div>

        <div class="post--estado--cantidad-comentarios">
          &nbsp;
          <small>{{ comentarios.length }} comentarios</small>
        </div>
      </div>
    </div>
    <div
      class="post--comentarios"
      v-bind:class="{ empty: !estado && this.comentarios.length == 0 }"
    >
      <comentarios-post :comentarios="comentarios"></comentarios-post>
      <div
        class="post--comentarios--container"
        v-if="estado"
        v-bind:class="{ error: inputError }"
      >
        <input
          @focus="showInputLogo = true"
          @blur="showInputLogo = comentario_text"
          type="text"
          rows="1"
          class="post--comentarios--container--input"
          placeholder="Escribe un comentario"
          v-model="comentario_text"
          v-on:keyup.enter="guardarComentario"
          ref="comment"
        />
        <i
          @click="guardarComentario"
          v-if="showInputLogo"
          class="fa fa-paper-plane escribir-post--container--logo"
        ></i>
        <!-- </textarea> -->
      </div>
    </div>
  </div>
</template>
<script>
import ComentariosPost from "@/layouts/ComentariosPost.vue";
export default {
  components: { ComentariosPost },
  name: "ReacionesComentariosPost",
  props: {
    reaciones: Map,
    comentarios: Array,
    id: String,
  },
  data() {
    return {
      estado: false,
      comentario_text: "",
      inputError: false,
      showModal: false,
      showInputLogo: false,
    };
  },
  methods: {
    guardarComentario() {
      this.comentario_text = this.comentario_text.trim();
      if (this.comentario_text) {
        this.$store.commit("guardarComentario", [
          this.comentario_text,
          this.id,
        ]);
        this.estado = !this.estado;
        this.comentario_text = "";
      } else {
        this.comentario_text = "";
        this.cantPostNotification();
      }
    },
    focusInput() {
      this.estado = !this.estado;
      if (this.estado) {
        this.$nextTick(() => {
          this.$refs?.comment?.focus();
        });
      }
    },
    cantPostNotification() {
      this.inputError = true;
      setTimeout(() => (this.inputError = false), 500);
    },
    guardarReacion(tipo) {
      let data = { id: this.id, tipo };
      this.$store.commit("guardarReacion", data);
      this.showModal = false;
    },
  },
};
</script>