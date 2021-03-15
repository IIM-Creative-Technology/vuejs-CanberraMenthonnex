import { createStore } from 'vuex'

export default createStore({
  state: {
    posts : [
      {
        title : "MyTitle",
        metaTitle : "meta-title",
        metaDescription : "meta-description",
        imageUrl : "https://source.unsplash.com/random",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        author : 'Jean Durand',
        createdAt : new Date()
      }
    ]
  },
  mutations: {
    
    addPost(state, post){
      state.posts.push(post);
    }

  },
  actions: {
  
    addPost(ctx, post){
      ctx.commit('addPost', post);      
    }

  }
})
