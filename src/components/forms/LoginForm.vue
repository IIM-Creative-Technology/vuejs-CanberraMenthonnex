<template>
    <form @submit.prevent="login">
        <input-label v-model="username" type="text" name="username" label="Username"/>
        <input-label v-model="password" type="password" name="password" label="Password"/>
        <router-link :to="{name: 'Register'}">
            Pas de compte ? S'inscrire
        </router-link>
        <button>
            Se connecter
        </button>
    </form>
</template>

<script>
import InputLabel from '../inputs/InputLabel.vue'
export default {
    name: "LoginForm",
    components : {
        InputLabel
    },
    emit :[
        "login"
    ],
    data() {
        return {
            username : "",
            password: ""
        }
    },
    methods: {
        login() {
            this.$emit("login", {username : this.username, password : this.password})
        }
    }
}
</script>
