<template>
    <button class="delete-btn"></button>
</template>

<script>


export default {
    name: "DeleteButton",

}
</script>

<style scoped>

    .delete-btn {
        width: 40px;
        height: 40px;
        background-color: red;
        position: relative;
        border-radius: 100%;
        border: 2px solid black;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:focus {
        outline: none;
    }

    .delete-btn:hover {
        border-color: white;
    }
    .delete-btn:hover::after, .delete-btn:hover::before{
        background-color: white;
    }

    .delete-btn::after, .delete-btn::before {
        content: "";
        display: block;
        width: 80%;
        height: 3px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: .5s;
    }

    .delete-btn::after {
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }

    .delete-btn::before {
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    }
</style>
