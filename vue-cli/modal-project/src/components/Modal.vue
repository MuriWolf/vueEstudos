<template>
  <div class="background" @click="removeModal" ref="backgroundModal">
    <div class="modal">
        <h1>Hey! I am a modal!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ullam aut, impedit cupiditate laudantium odio dolore harum in cum cumque expedita voluptates omnis exercitationem ipsum placeat. Minima praesentium quae modi.</p>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        removeModal(e) {
            this.$refs.backgroundModal.classList.add("d-none");
        }
    }
}
</script> 

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background-color: white;
        border-radius: 10px;
    }

    .background {
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.499);
    }
  
    .modal p {
        font-style: normal;
    }

</style>