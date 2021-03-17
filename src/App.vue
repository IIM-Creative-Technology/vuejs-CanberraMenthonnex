<template>
  <nav-bar/>
  <alert />

    <router-view v-slot="{Component}">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
</template>

<script>
import Alert from './components/Alert.vue';
  import NavBar from "./components/Navbar.vue";
  export default{
    components: {
      NavBar,
      Alert   
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

.fade-enter-active,
.fade-leave-active  {
  transition-duration: .5s;
  transition-property: transform opacity;
  transition-timing-function: ease;
  transform: translateX(0);
}

.fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.fade-enter-from {
 transform: translateX(100%);
 opacity: 0;
}
</style>
