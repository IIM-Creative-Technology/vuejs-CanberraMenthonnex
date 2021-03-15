<template>
    <section class="form-container">
        <header class="form--header">
            <slot name="header"></slot>
        </header>
        <form action="" @submit.prevent="submitForm">
            <slot></slot>    
        </form>  
    </section>
</template>

<script>

export default {
    name: "CustomForm",
    emits: ["submit"],
    methods: {
        submitForm() {
            this.$emit("submit")
        }
    }
}
</script>

<style scoped>
    .form-container {
        background-color: white;
        width: 60%;
        margin: 0 auto;
        padding: 10px;
        border-radius: 30px;
    }
    .form--header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }
    .form--header::before, .form--header::after {
        display: block;
        content: "";
        position: absolute;
        width: 60%;
        height: 3px;
        background-color: black;
    }   
    .form--header::before {
        top: 0;
    }
    .form--header::after {
        bottom: 0;
    }
</style>