<template>
  <div class="corpo">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link class="spacing" v-for="route in routes" :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>

    </nav>

    <router-view></router-view>
  </div>

</template>

<script>

import { routes }  from './routes';

export default {

  props: ['md-src'],

  data() {

    return {
      routes
    }

  },

  name: 'TabIcons',

}
</script>

<style scoped>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .spacing {
    Margin-right: 10px;
  }

  .md-tabs + .md-tabs {
    margin-top: 24px;
  }

</style>
