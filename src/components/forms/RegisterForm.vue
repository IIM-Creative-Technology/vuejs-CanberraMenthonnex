<template>
    <form-wrapper @submit="register">
        <template #header>
            <h1>
                Inscription
            </h1>
        </template>
        <input-label v-model="username" type="text" name="username" label="Username" :hasError="usernameError" :verticalMargin="true"/>
        <input-label v-model="password" type="password" name="password" label="Password" :hasError="passwordError" :verticalMargin="true"/>
        <input-label v-model="confirmPassword" type="password" name="confirm_password" label="Confim Password" :hasError="passwordError" :verticalMargin="true"/>
        <template #footer>
            <router-link :to="{name: 'Login'}">
                Déjà un compte ? Se connecter
            </router-link>
            <submit-button :verticalMargin="true">
                S'inscrire
            </submit-button>
        </template>
        
    </form-wrapper >
</template>

<script>
import SubmitButton from '../buttons/SubmitButton.vue'
import InputLabel from '../inputs/InputLabel.vue'
import FormWrapper from './FormWrapper.vue'

export default {
    name: "LoginForm",
    components : {
        InputLabel,
        FormWrapper,
        SubmitButton
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
