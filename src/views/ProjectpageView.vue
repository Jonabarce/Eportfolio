<template>
    <h1>My projects</h1>
    <Header></Header>
    <div class="main-container">
        <ProjectCard></ProjectCard>
    </div>
</template>




<script>
import ProjectCard from '../components/Projectpage/ProjectCard.vue'
import Header from '../components/Projectpage/Header.vue'

export default{
    name: 'ProjectpageView',
    components: {
        ProjectCard,
        Header
    },
};



</script>



<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

h1{
    font-size: 50px;
    color: black;
    text-decoration: underline;
}


</style>
