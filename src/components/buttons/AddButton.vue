<template>
    
        <router-link class="add-button" :to="{name: 'CreatePost'}" ></router-link>
    
</template>

<script>
export default {
    name: "AddButton",

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

    .add-button::after{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        
        height: 5px;
        width: 80%;
        border-radius: 10%;
        background: white;

        transform:  translateY(-50%) translateX(-50%) rotate(90deg);
    }

    .add-button::before{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;

        width: 80%;
        height: 5px;
        border-radius: 10%;
        background: white;

        transform: translateX(-50%) translateY(-50%);
        
    }
</style>