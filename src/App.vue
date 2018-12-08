<template>
  <div class="corpo">
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-icon="home" to="/"></md-tab>
      <md-tab id="tab-pages" md-icon="format_list_numbered" to="/pedidos"></md-tab>
      <md-tab id="tab-logout" md-icon="exit_to_app" @click="second = true"></md-tab>
    </md-tabs>

    <!-- Alert Dialog -->
    <md-dialog-confirm
      :md-active.sync="second"
      md-title="Alerta"
      md-content="Deseja realmente <strong>deslogar</strong> do sistema Cardapy Empresa?"
      md-confirm-text="CONFIRMAR"
      md-cancel-text="DESCARTAR"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <router-view></router-view>
  </div>

</template>

<script>

import firebase, { functions } from 'firebase';
import { routes }  from './routes';

export default {

  // props: ['md-src'],
  name: 'TabIcons',
  name: 'DialogConfirm',
  data() {
    return {
      routes,
      second: false,
      value: null
    }
  },

  methods: {
      onConfirm() {
        this.value = 'SIM'
        this.logOut();
      },
      onCancel() {
        this.value = 'NÃO'
      },
      logOut() {
        let user = firebase.auth().currentUser;
        user.logOut;
        window.location.href = '/login'
      }
    },

  created() {
    let user = firebase.auth().currentUser;
    if (user == null) {
      // window.location.href = '/login'
      console.log('Nao logado');
    } else {
      console.log('Logado');
    }
  }

}
</script>

<style lang="scss" scoped>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 100%;
  }

  .md-tabs + .md-tabs {
    margin-top: 24px;
  }

</style>
