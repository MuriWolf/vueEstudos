<template>
  <h1>Composition API</h1>
</template>

<script>
import { onMounted } from 'vue';

console.log("before");
export default {
    setup() {
        onMounted(() => {
            console.log("Site montado com sucesso!");
        })
    }
}
</script>

<style>

</style>