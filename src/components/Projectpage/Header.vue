<template>
    <div class="button-container">
        <div class="projectsbutton">
                <a @click="changeRoute('Homepage')" href="">Homepage</a>
            </div>
            <div class="projectsbutton">
                <a @click="changeRoute('Resumepage')" href="">My Resume</a>
        </div>
    </div>
</template>



<script>
export default {
    name: "HeaderPage",
    methods: {
        changeRoute(string){
            this.$router.push({name:string})
        }
    }
}


</script>




<style scoped>


.button-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
}

.projectsbutton{
    background-color: #3CB371;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
}

.projectsbutton a{
    text-decoration: none;
    color: white;
    font-size: 25px;
}



</style>