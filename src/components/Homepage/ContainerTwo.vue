<template>
    <div class="container-two">
        <div class="button-container">
            <div class="projectsbutton">
                <a @click="changeRoute('Projectpage')" href="">My projects</a>
            </div>
            <div class="projectsbutton">
                <a href="">My Resume</a>
            </div>
        </div>
        <div class="about-me">
            <h1>About me</h1>
            <p>
                <br>
                My name is Jonatan Andre Vevang. I come from north norway and
                im 20 years old
                I am a student in Trondheim.
                Im currently in my second year studying Computer enineering. 
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </p>
        </div>
        <div class="technology-section">
            <h1>Technologies Studied</h1>
            <div class="logos">
                <img src="../../assets/java.png" alt="">
                <img src="../../assets/python.png" alt="">
                <img src="../..//assets/html-5.png" alt="">
                <img src="../..//assets/css-3.png" alt="">
                <img src="../..//assets/js.png" alt="">
                <img src="../..//assets/vue.png" alt="">
                <img src="../..//assets/mysql.png" alt="">
            </div>
        </div>
    </div>
</template>


<script>

export default {
    methods: {
        changeRoute(string){
            this.$router.push({name:string})
        }
    }
}



</script>

<style scoped>

.container-two{
    background: 	#D3D3D3;
    margin: 2.5%;
    width: 70%;
    color: black;
}

.about-me p{
    font-size: 25px;
}


.logos img{
    height: 4rem;
    border-radius: 50%;
    margin: 0.5%;
}

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