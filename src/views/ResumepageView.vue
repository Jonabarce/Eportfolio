<template>
    <div class="wrapper">
        <div class="main-container">
            <LeftSection></LeftSection>
            <RightSection></RightSection>
        </div>
    </div>
    
</template>




<script>
import LeftSection from '../components/Homepage/LeftSection.vue'
import RightSection from '../components/Homepage/RightSection.vue';





export default {
    name: 'ResumepageView',
    components : {
        LeftSection,
        RightSection
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