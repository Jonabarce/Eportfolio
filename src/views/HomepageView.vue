<template>
    <div class="wrapper">
        <div class="main-container">
            <ContainerTwo></ContainerTwo>
            <ContainerOne></ContainerOne>
        </div>
    </div>
</template>




<script>
import ContainerOne from '../components/Homepage/ContainerOne.vue'
import ContainerTwo from '../components/Homepage/ContainerTwo.vue'

export default {
    name: 'HomepageView',
    components : {
        ContainerOne,
        ContainerTwo
    },
};


</script>




<style scoped>

.wrapper{
    display: flex;
    justify-content: center;
}

.main-container{
    display: flex;
    flex-direction: row;
    background-color: black;
    border-radius: 25px;
    width: 85%;
}




</style>