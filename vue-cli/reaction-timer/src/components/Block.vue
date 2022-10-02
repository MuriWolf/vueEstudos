<template>
  <div class="block" v-if="showBlock" @click="takeTime">
    click me
  </div>
</template>

<script>
export default {
    props: ["delay"],
    data() {
      return {
        showBlock: false,
        reactionTime: null,
      }
    },
    methods: {
      takeTime() {
        this.reactionTime = Date.now() - this.reactionTime;
        this.$emit("end", this.reactionTime);
      }
    },
    mounted() {
      setTimeout(() => {
        this.showBlock = true;
        this.reactionTime = Date.now();
      }, this.delay)
    },
}
</script>

<style>
    .block {
        background-color: rgb(63, 238, 35);
        margin: 50px auto;
        width: 300px;
        padding: 100px 0;
        text-align: center;
        border-radius: 8px;
    }
</style>