<template>
    <div>
        <component-header></component-header>
        <card></card>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';

export default({
  name: 'App',
  components:{
      'component-header': Header,
      'card': Card
  }
});
</script>

<style></style>
