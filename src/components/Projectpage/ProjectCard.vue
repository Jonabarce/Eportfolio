<template>
    <div class="project-card" v-for="(items,index) in projectData.ProjectsArray" v-bind:key="items">
        <h2>{{projectData.ProjectsArray[index].title}}</h2>
        <img :src="projectData.ProjectsArray[index].Image" alt="">
        <p>{{projectData.ProjectsArray[index].About}}</p>
    </div>
</template>




<script>
import jsonData from "/projects.json"


export default {
    data(){
        return{
            projectData: jsonData
        }
    }
}




</script>



<style sscoped>



.project-card{
    margin: 10px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color: aliceblue;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.project-card img{
    height: 10rem;
}


</style>