<template>
  <h1>{{ title }}</h1>  
  <input type="text" ref="name">
  <button @click="handleClick" style="display: block">Click me, MF!</button>

  <teleport to="#modals" v-if="showModal">
    <Modal theme="dark" @close="toogleModal">
      <h1>Sign up for the giveaway</h1>
      <p>Be ready for this giveaway with amazing presents just for you!</p>
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toogleModalTwo">
      <h1>Download the our new Code editor!</h1>
      <p>With new features, you will code better now!</p>
      <p>Click bellow to download in your favorite version</p>
      <template v-slot:links>
        <a href="#">Windows</a>
        <a href="#">Linux</a>
        <a href="#">MacOS</a>
      </template>
    </Modal>
  </teleport>

  <button @click.ctrl="toogleModal" style="display: block">Click here to show the modal (ctrl)</button>
  <button @click.alt="toogleModalTwo" style="display: block">Click here to show the modal two (alt)</button>

  <p class="d-non">Se eu estiver escondido, algo está errado!</p>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  components: { Modal },
  data() {
    return {
      title: "(Not) My first vue App",
      showModal: false,
      showModalTwo: false,
      // headerModal: "Sign up for the giveaway",
      // textModal: "Be ready for this giveaway with amazing presents just for you!",
    } 
  },
  methods: {
      handleClick() {
        this.$refs.name.focus();
        this.$refs.name.classList.add("active");
        console.log(this.$refs.name);
    },
    toogleModal() {
      this.showModal = !this.showModal; 
    },
    toogleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
  #app, #modals {
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
