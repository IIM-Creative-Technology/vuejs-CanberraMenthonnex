<template>
    <nav class="nav">
        <router-link class="item" :to="{name: 'BlogList'}">Gérer le blog</router-link> |
        <router-link :to="{name: 'Blog'}">Blog</router-link> | 
        <router-link :to="{name: 'Login'}">Login</router-link>
    </nav>

</template>


<script>
import { mapState } from 'vuex'
export default {
    name: "NavBar",
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    },
    computed : {
        ...mapState({
            user: state => state.connectedUser
        })
    }
}
</script>


<style>
    
    .nav {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 10px 20px;
    }

    .nav--items {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
    }

    .nav--cta {
        background: none;
        color: white;
        text-decoration: none;
        font-size: 1.2em;
        padding: 10px;
        cursor: pointer;
    }


</style>