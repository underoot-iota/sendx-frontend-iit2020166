<template>
  <Nav/>
  <HeaderComponent/>
</template>


<script>
import Nav from './components/AppHeader.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    Nav,
    HeaderComponent
  },
  data(){

  },
  methods: {

  }
}
</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

</style>
