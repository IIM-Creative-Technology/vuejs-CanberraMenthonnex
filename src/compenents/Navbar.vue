<template>
    <nav>
        <router-link :to="{name: 'BlogList'}">Gérer le blog</router-link> |
        <router-link :to="{name: 'Blog'}">Blog</router-link> | 
        <router-link :to="{name: 'Login'}">Login</router-link>
    </nav>

</template>


<script>
export default {
    name: "NavBar",
    
}
</script>


<style>

</style>