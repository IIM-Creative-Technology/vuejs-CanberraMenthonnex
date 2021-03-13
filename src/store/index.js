import { createStore } from 'vuex'

export default createStore({
  state: {
    users : [],
    connectedUser : {},
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
      const user = ctx.state.users.find(user => user.username === username && user.password === password)
      ctx.commit("connectUser", user)
    },
    /**
     * Register user
     * 
     * @param {*} ctx 
     * @param {*} user 
     */
    register(ctx, user) {
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
