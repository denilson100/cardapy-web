<template>
  <div class="fundo">
    <h1 class="centralizado spacing">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="photo in photos">

        <meu-painel :id="photo.id" :title="photo.title" :url="photo.url">
        </meu-painel>

      </li>
    </ul>

  </div>

</template>

<script>

import Painel from '../shared/painel/Painel.vue';

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

  .lista-fotos {
    list-style: none;
  }
  .lista-fotos .lista-fotos-item {
    /* display: inline-block; */
  }
  .imagem-responsiva {
    width: 100%;
  }

  .centralizado {
    text-align: center;
  }

  .spacing {
    padding: 10px;
  }

  .fundo {
    background: #eeeeee;
  }

</style>
