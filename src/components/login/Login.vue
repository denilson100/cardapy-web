<template>
  <div class="container">
    <div class="row">
    <div class="col-">
    </div>

    </div>
    <div class="col-md">
      <md-card class="padding-card">
        <div>
          <img src="src/assets/logo.png" class="center">
        </div>
      <md-card-header class="text-center">
        <div class="md-title">Cardapy Empresa</div>
      </md-card-header>

      <md-field>
        <label>Email</label>
        <md-input v-model="email"></md-input>
      </md-field>

      <md-field>
        <label>Senha</label>
        <md-input v-model="password"></md-input>
      </md-field>

      <md-card-actions>
        <md-button @click="signIn">ENTRAR</md-button>
      </md-card-actions>
    </md-card>

    <div class="col-">
    </div>
  </div>
  </div>

</template>

<script>

import firebase, { functions } from 'firebase';

export default {
   name: 'RegularCards',
   name: 'TextFields',
   name: 'DialogAlert',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null,
      email: '',
      password: '',
      routes
    }),

    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            // alert('Está conectado ' + user);
            window.location.href = '/';
          },
          function(err) {
            alert('Oops, ' + err.message);
            // router.push({ path: 'pedidos'})
          }
        )
      }
    }
}
</script>

<style lang="scss">

.md-primary {
  visibility: hidden
}

.text-center {
  text-align: center;
}

.padding-card {
  padding: 8px;
}

img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
