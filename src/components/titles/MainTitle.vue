<template>
    <h1 class="main-title">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    name: "MainTitle",
    props: {
        className : String
    }
}
</script>

<style scoped>

    .main-title {
        color: white;
        font-size: 2em;
    }

</style>