<template>
    <nav-bar/>
    <alert />

    <router-view v-slot="{Component}">
      <slide-transition>
        <component :is="Component"/>
      </slide-transition>
    </router-view>
</template>

<script>
  import Alert from './components/Alert.vue';
  import NavBar from "./components/Navbar.vue";
  import SlideTransition from './components/transitions/SlideTransition.vue';
  
    export default{
      components: {
        NavBar,
        Alert, 
        SlideTransition   
      }
    }
</script>



<style>
body {
  padding: 0;
  margin: 0;
  background-color: #1C1E3D;
  overflow-x: hidden;
}
* {
  font-family: sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
