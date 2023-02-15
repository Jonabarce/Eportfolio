<template>
    <div class="project-card" v-for="(items,index) in projectData.ProjectsArray" v-bind:key="items">
        <h2>{{projectData.ProjectsArray[index].title}}</h2>
        <img :src="projectData.ProjectsArray[index].Image" alt="">
        <p>{{projectData.ProjectsArray[index].About}}</p>
        <a v-bind:href="projectData.ProjectsArray[index].Link1" target="_blank">More information</a>
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
    height: 20rem;
    border-radius: 10px;
}

@media (max-width: 767px) {
    .project-card img{
        height: 15rem;
    }
}

.project-card p {
    color: black;
    font-size: 20px;
}

.project-card a {
    text-decoration: none;
    font-size: 23px;
    background-color: 	#BA55D3;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    color: white;
}

.project-card a:hover{
    text-decoration: underline;
}

.project-card h2{
    color: black;
    font-size: 25px;
}


</style>