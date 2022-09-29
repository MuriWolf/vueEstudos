<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click me, MF!</button>
  <Modal/>

  <p class="d-non">Se eu estiver escondido, algo está errado!</p>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  components: { Modal },
  data() {
    return {
      title: "(Not) My first vue App"
    } 
  },
  methods: {
      handleClick() {
        this.$refs.name.focus();
        this.$refs.name.classList.add("active")
        console.log(this.$refs.name);
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

  input.active {
    outline: 2px solid rgb(54, 182, 241);
  }
</style>
