<template>
  <h1>{{ title }}</h1>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: "(Not) My first vue App"
    }
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
  margin-top: 60px;
}

h1 {
  display: inline-block; 
  padding-bottom: 10px;
  border-bottom: 2px solid red;
}
</style>
