<template>
    <form-wrapper @submit="login">
        <template #header>
            <h1>
                Login
            </h1>
        </template>
        <input-label v-model="username" type="text" name="username" label="Username" :verticalMargin="true"/>
        <input-label v-model="password" type="password" name="password" label="Password" :verticalMargin="true"/>
        <template #footer>
            <router-link :to="{name: 'Register'}">
                Pas de compte ? S'inscrire
            </router-link>
            <submit-button :verticalMargin="true">
                Se connecter
            </submit-button>
        </template>
       
    </form-wrapper>
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
