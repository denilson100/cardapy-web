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

  /* estilo do painel */

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 300px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    box-shadow: 5px 5px 5px;
  }

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
