<template>
  <h1>Login</h1>
  <login-form @login="login"/>
</template>

<script>
import { mapState } from 'vuex'
import LoginForm from '../../components/forms/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  computed: {
    ...mapState({
      user : state => state.connectedUser
    })
  },
   methods: {
    login(user) {
      this.$store.dispatch("login", user)
    }
  }
}
</script>
