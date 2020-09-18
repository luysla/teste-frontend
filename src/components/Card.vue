<template>
    <div class="container-fluid content">

      <div class="content__title">
        <span class="content__title--blue">Montagem</span>
        <p class="content__title--grey">Divisórias: 03</p>
      </div>

      <div v-for="divisoria in divisorias" v-bind:key="divisoria.id" class="card bg-light text-center">
        <div class="card-header">
          {{ divisoria.id }}ª Divisória
        </div>
        <div class="card-body">0</div>
        <div class="card-footer">
          <i class="fas fa-plus-circle"></i> Ingredientes
        </div>
      </div>
</template>

<script>
export default {
    name: 'Card',
    data(){
        return{
            divisorias: [
                { 'id': 1 },
                { 'id': 2 },
                { 'id': 3 },
            ]
        }
    }
}
</script>

