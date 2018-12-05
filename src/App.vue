<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="photo in photos">

        <meu-painel :id="photo.id">
            <img class="imagem-responsiva" :src="photo.url" :alt="photo.title">
            <p>{{ photo.title }}</p>
        </meu-painel>

      </li>
    </ul>

  </div>

</template>

<script>

import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
    'meu-painel' : Painel
  },

  data() {
      return {
        titulo: 'Lista de Pedidos',
        photos: []
      }
    },

    created() {

    this.$http.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>

  .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

</style>
