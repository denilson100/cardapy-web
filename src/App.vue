<template>
  <div class="corpo">

    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="spacing" v-for="route in routes" :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
    </nav> -->

    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-icon="home" to="/"></md-tab>
      <md-tab id="tab-pages" md-icon="format_list_numbered" to="/pedidos"></md-tab>
    </md-tabs>

    <router-view></router-view>
  </div>

</template>

<script>

import { routes }  from './routes';

export default {

  // props: ['md-src'],
  name: 'TabIcons',

  data() {

    return {
      routes
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
