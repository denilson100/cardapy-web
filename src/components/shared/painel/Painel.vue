<template>
    <div>
    <!-- <slot class="painel-conteudo"></slot> -->
    <md-card class="spacing fundo">
      <md-card-header>
        <md-card-media>
          <img :src="url" alt="People">
        </md-card-media>
        <md-card-header-text class="spacing">
          <div class="md-title">{{ id }}</div>
          <div class="md-subhead">{{ title }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button>Finalizar</md-button>
        <md-button>Arquivar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
    props: ['id', 'title', 'url']
}
</script>

<style scoped>

  .spacing {
    Margin: 10px;
  }

  .fundo {
    background: #ffffff;
  }

  img {
    border-radius: 50%;
  }

</style>
