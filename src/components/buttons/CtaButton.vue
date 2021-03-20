<template>
    <router-link :to="to" class="cta-button">Consulter</router-link>
</template>

<script>

export default {
    name: "CtaButton",
    props: ["to"]
}

</script>

<style scoped>
    
    .cta-button{
        text-decoration: none;
        color: white;
        background-color: #1c1e3d;
        padding: 20px;
        border-radius: 30px;
        margin: auto;
    }
    
</style>
