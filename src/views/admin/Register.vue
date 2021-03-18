<template>
    <h1>Register</h1>
    <register-form @register="register"/>
</template>

<script>
import RegisterForm from "@/components/forms/RegisterForm"


export default {
    components: {
        RegisterForm
    },
    methods: {
        register(user) {
            this.$store.dispatch("register", user)
            .then(() => {
                this.$router.push('Login')
            })
        }
    }
}
</script>