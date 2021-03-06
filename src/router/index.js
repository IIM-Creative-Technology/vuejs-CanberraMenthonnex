import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/admin/BlogList.vue'
import Login from "../views/admin/Login.vue"
import Blog from "../views/Blog.vue"
import CreatePost from "../views/admin/CreatePost"
import Register from "../views/admin/Register"
import EditPost from "../views/admin/EditPost"
import Post from "../views/Post"
import { withAuth, withoutAuth } from '../middleware/auth'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog,
  }, 

  {
    path: "/post/:slug",
    name: "Post",
    component: Post,

  },

  {
    path: "/login",
    name : "Login",
    component: Login,
    beforeEnter: withoutAuth
  }, 
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: withoutAuth
  },
  
  {
    path: "/admin",
    name: 'BlogList',
    component: BlogList,
    beforeEnter : withAuth,
    children: [
      {
        path : "edit/:slug",
        component: EditPost,
        name: "EditPost"
      }
    ]
  },
  {
    path: "/admin/create",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: withAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

