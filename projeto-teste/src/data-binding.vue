<template>
  <div>
    <h1 :class="decoration">Hello {{ name }}!</h1>
    <input type="text" v-model="name">
    <p :style="{ textDecoration: decoration2 }">Hey! I am a text!</p>
    <a :href="linkPortfolio" target="_blank">Clica ae man</a>

  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Murillo",
    decoration: "highlight",
    decoration2: "underline",
    linkPortfolio: "https://murillooliveira.netlify.app/",
  })
}
</script>

<style>
  .highlight {
    color: red;
    text-decoration: underline;
  }
</style>