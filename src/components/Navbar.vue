<template>
    <nav class="nav">
        <router-link class="item" :to="{name: 'BlogList'}">Gérer le blog</router-link> |
        <router-link :to="{name: 'Blog'}">Blog</router-link> | 
        <router-link :to="{name: 'Login'}">Login</router-link>
    </nav>

</template>


<script>
export default {
    name: "NavBar",
    
}
</script>

<style lang="sass">

</style>