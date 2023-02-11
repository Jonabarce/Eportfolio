<template>
    <HeaderResume></HeaderResume>
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
import HeaderResume from '../components/Homepage/HeaderResume.vue'





export default {
    name: 'ResumepageView',
    components : {
        LeftSection,
        RightSection,
        HeaderResume
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
    flex-direction: column;
    background-color: black;
    border-radius: 25px;
    width: 85%;
}




</style>