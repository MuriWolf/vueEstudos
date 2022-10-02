<template>
  <div class="background" ref="backgroundModal" @click.self="closeModal"> 
    <div class="modal" :class="{darkModal: theme === 'dark'}">
        <slot></slot>
        <div class="actions">
            <slot name="links"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["theme"],
    methods: {
        removeModal(e) {
            this.$refs.backgroundModal.classList.add("d-none");
        },
        closeModal() {
            this.$emit("close")
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

    .darkModal {
        background-color: #252525;
        color: rgb(227, 227, 227);
    }

    .modal .actions a {
        color: black;
        margin: 10px 20px;
        text-decoration: none;
        padding: 0.5em 1em;
        border: 1px solid black;
        border-radius: 4px;
    }

    .modal .actions {
        margin-top: 2em;
    }
    
    .modal.darkModal .actions a {
        color: rgb(227, 227, 227);
        border: 1px solid rgb(227, 227, 227);
    }

</style>