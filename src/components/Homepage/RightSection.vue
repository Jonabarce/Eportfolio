<template>
   <div class="container-one">
        <div class="about-me">
            <h3>Experience</h3>
            <div class="experience-card" v-for="(items,index) in projectData.ExperienceArray" v-bind:key="items">
                <h2>{{projectData.ExperienceArray[index].Title}}</h2>
                <p>{{projectData.ExperienceArray[index].Company}}</p>
                <p>{{projectData.ExperienceArray[index].Date}}</p>
                <p>{{projectData.ExperienceArray[index].About}}</p>
            </div>
            <h3>Education</h3>
            <div class="education">
                <div class="experience-card" v-for="(items,index) in projectData2.EducationArray" v-bind:key="items">
                <h2>{{projectData2.EducationArray[index].Title}}</h2>
                <p>{{projectData2.EducationArray[index].Company}}</p>
                <p>{{projectData2.EducationArray[index].Date}}</p>
                <p>{{projectData2.EducationArray[index].About}}</p>
            </div>
            </div>
            <h3>Skills</h3>
            <div class="skills">
                <div class="logos">
                    <img src="../../assets/java.png" alt="" title="Java">
                    <img src="../../assets/python.png" alt="" title="Python">
                    <img src="../..//assets/html-5.png" alt="" title="HTML">
                    <img src="../..//assets/css-3.png" alt="" title="CSS">
                    <img src="../..//assets/js.png" alt="" title="JavaScript">
                    <img src="../..//assets/vue.png" alt="" title="Vue.js">
                    <img src="../..//assets/react.png" alt="" title="React">
                    <img src="../..//assets/mysql.png" alt="" title="MySQL">
                </div>
            </div>
            <h3>Projects</h3>
            <div class="projects">
                <a id="myprojects" @click="changeRoute('Projectpage')" href="">My projects</a>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>


<script>
import jsonData from "/experience.json"
import jsonData2 from "/education.json"


export default {
    data(){
        return{
            projectData: jsonData,
            projectData2: jsonData2
        }
    },
    methods: {
        changeRoute(string){
            this.$router.push({name:string})
        }
    }
}

</script>





<style scoped>

.about-me{
    display: flex;
    flex-direction: column;
}
.experience-card{
    margin: 10px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color: aliceblue;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.experience-card p {
    color: black;
    font-size: 20px;
}

.experience-card h2{
    color: black;
    font-size: 25px;
}

.logos img{
    height: 5rem;
    border-radius: 50%;
    margin: 0.5%;
}


h3{
    font-size: 25px;
    color: white;
    text-decoration: underline;
}

a{
    text-decoration: none;
    color: white;
    font-size: 25px;
}

a:hover{
    text-decoration: underline;
}





</style>