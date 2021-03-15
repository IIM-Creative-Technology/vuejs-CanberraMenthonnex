import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    users : JSON.parse( localStorage.getItem("auth-users") ) || [],
    connectedUser : JSON.parse( localStorage.getItem('auth' )),
    posts : [
      {
        title : "MyTitle",
        metaTitle : "meta-title",
        metaDescription : "meta-description",
        imageUrl : "https://source.unsplash.com/random",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        author : 'Jean Durand',
        createdAt : new Date()
      },
      
    ],
    alertMessage : {
      hasError: false,
      display: false,
      message: ""
    }
  },
  mutations: {
    /**
     * Mutate users 
     * 
     * @param {*} state 
     * @param {*} user 
     */
    registerUser(state, user) {
      state.users = [...state.users, user]
    },
    /**
     * Mutate connectedUser
     * 
     * @param {*} state 
     * @param {*} user 
     */
    connectUser(state, user) {
      state.connectedUser = user
    },
    /**
     * Remove connected user
     * 
     * @param {*} state 
     */
    logout(state) {
      state.connectedUser = null
    },
    /**
     * Mutate alertMessage
     * 
     * @param {*} state 
     * @param {*} param1 
     */
    switchAlertDisplay(state, {hasError, message}) {
      state.alertMessage = {
        display : !state.alertMessage.display,
        hasError,
        message
      }
    }
  },
  actions: {
    /**
     * Login user
     * 
     * @param {*} ctx 
     * @param {*} param1 
     */
    login(ctx, {username, password}) {
      console.log(ctx.state.users);
      const user = ctx.state.users.find(user => user.username === username && user.password === password)

      if (!user) {
        return ctx.commit('switchAlertDisplay', {message: "The authentification is erroned", hasError: true})
      }

      localStorage.setItem("auth", JSON.stringify( {username} ))
      ctx.commit("connectUser", user)
      router.push({name: 'Blog'})
    },
    /**
     * Logout user
     * 
     * @param {*} ctx 
     */
    logout(ctx) {
      localStorage.removeItem("auth")
      ctx.commit("logout")
      router.push({ name: "Login"  })
    },
    /**
     * Register user
     * 
     * @param {*} ctx 
     * @param {*} user 
     */
    register(ctx, user) {
      localStorage.setItem("auth-users", JSON.stringify( [...ctx.state.users, user]))
      ctx.commit("registerUser", user)
    },
    /**
     * Display or hide alert popup
     * 
     * @param {*} ctx 
     * @param {*} alertState 
     */
    alert(ctx, alertState = {}) {
      ctx.commit("switchAlertDisplay", alertState)
    }
  }
})
