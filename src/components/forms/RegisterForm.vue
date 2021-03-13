<template>
    <form @submit.prevent="register">
        <input-label v-model="username" type="text" name="username" label="Username"/>
        <input-label v-model="password" type="password" name="password" label="Password" :hasError="passwordError"/>
        <input-label v-model="confirmPassword" type="password" name="confirm_password" label="Confim Password" :hasError="passwordError"/>
        <router-link :to="{name: 'Login'}">
            Déjà un compte ? Se connecter
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
        "register"
    ],
    data() {
        return {
            username : "",
            password: "",
            confirmPassword : "",
            passwordError: false
        }
    },
    methods: {
        register() {
            
            if(this.password !== this.confirmPassword) {
                return this.passwordError = true
            }

            this.$emit("register", {username : this.username, password : this.password})
        }
    }
}
</script>
