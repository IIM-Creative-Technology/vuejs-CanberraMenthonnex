<template>
    <app-layout>
      <router-view v-slot="{Component}">
        <slide-transition>
          <component :is="Component"/>
        </slide-transition>
      </router-view>
    </app-layout>

</template>

<script>
  import Alert from './components/Alert.vue';
  import NavBar from "./components/navs/Navbar.vue";
  import SlideTransition from './components/transitions/SlideTransition.vue';
  import AppLayout from "./components/layouts/AppLayout"
  
    export default{
      components: {
        NavBar,
        Alert, 
        SlideTransition,
        AppLayout  
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

</style>
