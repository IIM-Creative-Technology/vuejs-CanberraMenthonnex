<template>
    
    <navbar />
    <alert />
    <div class="app-wrapper">
        <slot></slot>
    </div>

</template>

<script>
    import Alert from '../Alert.vue'
    import Navbar from '../navs/Navbar.vue'
    export default {
        name: "AppLayout",
        components: {
            Navbar,
            Alert
        }

    }
</script>

<style scoped>
    .app-wrapper {
        padding: 30px 0;
    }
</style>
