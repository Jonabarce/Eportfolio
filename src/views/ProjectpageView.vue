<template>
    <body>
        <div class="header">
            <Header></Header>
        </div>
        <div class="main-container">
            <ProjectCard></ProjectCard>
        </div>
    </body>
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
    align-items: center;
    flex-wrap: wrap;
    margin-top: 90px;
    width: 80%;
}

body{
    display: flex;
    justify-content: center;
}

.header{
    position: fixed;
    margin: 0 auto;
    width: 95%;
    height: 90%;
}

h1{
    font-size: 50px;
    color: black;
    text-decoration: underline;
}


</style>