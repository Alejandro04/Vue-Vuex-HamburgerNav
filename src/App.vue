<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Form/>
      <Display/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/FormComponent.vue'
import Display from './components/DisplayComponent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Form,
    Display,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
