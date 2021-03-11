import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/admin/BlogList.vue'
import Login from "../views/admin/Login.vue"
import Blog from "../views/Blog.vue"
import CreatePost from "../views/admin/CreatePost"

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  }, 
  {
    path: "/login",
    name : "Login",
    component: Login
  }, 
  {
    path: "/admin/blog",
    name: 'BlogList',
    component: BlogList
  },
  {
    path: "/admin/blog/create",
    name: "CreatePost",
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
