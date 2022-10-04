<template>
  <div class="home">
    <h1>Home</h1>
    <h3>Hello! My name is {{ name }} and i am {{ age }} years old!</h3>
    <p>Whats up</p>
    <button @click="handleClick">Click me!</button>
    <input type="text" v-model="name">
    <button @click="age++">Increase the age!</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  setup() {
    let name = ref("Murillo");
    let age = ref(16);

    const handleClick = () => {
      name.value = "Josefh"
    }

    return { name, age, handleClick }
  }
}
</script>
