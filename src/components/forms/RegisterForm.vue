<template>
    <form @submit.prevent="register">
        <input-label v-model="username" type="text" name="username" label="Username" :hasError="usernameError"/>
        <input-label v-model="password" type="password" name="password" label="Password" :hasError="passwordError"/>
        <input-label v-model="confirmPassword" type="password" name="confirm_password" label="Confim Password" :hasError="passwordError"/>
        <router-link :to="{name: 'Login'}">
            Déjà un compte ? Se connecter
        </router-link>
        <button>
           S'incrire
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
        "register"
    ],
    data() {
        return {
            username : "",
            password: "",
            confirmPassword : "",
            passwordError: false,
            usernameError: false,
        }
    },
    methods: {
        register() {
            this.usernameError = !this.username
            this.passwordError = this.password !== this.confirmPassword || !this.password || !this.confirmPassword

            if(!this.passwordError && !this.usernameError) {
                this.$emit("register", {username : this.username, password : this.password})
            }  
        }
    }
}
</script>
