<template>
        <router-link class="add-button" :to="to" ></router-link>
</template>

<script>
export default {
    name: "AddButton",
    props: ["to"]
}
</script>




<style scoped>
    .add-button{
        position: relative;
        height: 50px;
        width: 50px;
        border: none;
        border-radius: 50%;
        background: rgb(53, 201, 97);
        outline: none;
        display: block;
        margin: auto;
    }

    .add-button::after, .add-button::before{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 5px;
        width: 50%;
        border-radius: 10%;
        background: white;
        border-radius: 30px;
    }
    .add-button::after {
        transform:  translateY(-50%) translateX(-50%) rotate(90deg);
    }
    .add-button::before{
        transform: translateX(-50%) translateY(-50%);
    }
</style>