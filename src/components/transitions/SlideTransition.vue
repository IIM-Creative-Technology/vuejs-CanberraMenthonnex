<template>
    <transition
        name="slide"
        mode="out-in"
      >
        <slot></slot>
      </transition>
</template>

<script>
export default {
    name: "SlideTransition"
}
</script>

<style scoped>

.slide-enter-active,
.slide-leave-active  {
  transition-duration: .5s;
  transition-property: transform opacity;
  transition-timing-function: ease;
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-from {
 transform: translateX(100%);
 opacity: 0;
}
</style>