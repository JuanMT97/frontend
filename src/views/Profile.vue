<template>
  <div>
    <h1>
      <span>Informacion personal</span>
    </h1>
    <hr />
    <img :src="$auth.user.picture" />
    <h2>{{ $auth.user.name }}</h2>
    <p>{{ $auth.user.email }}</p>
    <div v-if="checkAdmin()" class="btn btn-success">Es administrador</div>
    <div v-else class="btn btn-danger">No es administrador</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      usuarios: [],
    };
  },
  created() {
    axios
      .get("https://backendtpf.herokuapp.com/usuarios")
      .then((response) => {
        this.usuarios = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    checkAdmin() {
      const usuario = this.$auth.user.email;
      for (var admin in this.usuarios) {
        if (
          usuario == this.usuarios[admin].email &&
          this.usuarios[admin].admin
        ) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>
