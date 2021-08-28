<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio </router-link>
      <router-link v-if="$auth.isAuthenticated" to="/profile">| Perfil </router-link>
      <router-link v-if="$auth.isAuthenticated" to="/profileUsuario">| Encuestas </router-link>
      <router-link v-if="$auth.isAuthenticated" to="/primerYSegundoTrimestre">| Primer y Segundo Trimestre </router-link> 
      <router-link v-if="$auth.isAuthenticated" to="/tercerTrimestre">| Tercer Trimestre </router-link>
      <router-link v-if="$auth.isAuthenticated" to="/neonato">| Neonato </router-link>  
      <router-link v-if="$auth.isAuthenticated && checkAdmin()" to="/profileAdmin">| Administracion</router-link>
      <div v-if="!$auth.loading" class="text-right">
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      </div>
    </div>
    <router-view/>
  </div> 
</template>

<style>

#app {
  font-family: Bold, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #ffffff;
  color: #2c3e50;
}

#logout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  background: #f7f7f7c4;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      usuarios: []
    }
  },
  created () {
    axios.get("https://backendtpf.herokuapp.com").then(response => {
      this.usuarios = response.data
    }).catch(e => {
      this.errors.push(e)
    });
  }, 
  methods: {
    checkAdmin() {
      const usuario = this.$auth.user.email;
      for (var admin in this.usuarios){
        if(usuario == this.usuarios[admin].email && this.usuarios[admin].admin){
          return true;
        }          
      }
      return false;
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
