<template>
    <nav class="nav">
        <div>
            <router-link class="nav--items" :to="{name: 'Blog'}">Blog</router-link> | 
            <router-link class="nav--items" v-if="user" :to="{name: 'BlogList'}">Gérer le blog</router-link> |
        </div>
        
        <router-link class="nav--cta" v-if="!user" :to="{name: 'Login'}">Login</router-link>
        <button class="nav--cta" v-if="user" @click="logout">Déconnexion</button>
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
        border: 2px solid white;
        font-size: 1.2em;
        padding: 10px;
        cursor: pointer;
    }


</style>