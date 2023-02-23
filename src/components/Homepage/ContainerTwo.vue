<template>
    <div class="container-two">
        <div class="button-container">
            <div class="projectsbutton">
                <a @click="changeRoute('Projectpage')" href="">My projects</a>
            </div>
            <div class="projectsbutton">
                <a @click="changeRoute('Resumepage')" href="">My Resume</a>
            </div>
        </div>
        <div class="about-me">
            <h1>About me</h1>
            <p>

              My name is Jonatan Andre Vevang. I'm from the north of Norway.
                I am 20 years old, and
                a student at NTNU in Trondheim.
                Currently i'm in my second year studying computer engineering.
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
    </div>
</template>

<script>
export default {
    methods: {
        changeRoute(string) {
            this.$router.push({ name: string });
        }
    }
};
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
    height: 5rem;
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


a:hover{
    text-decoration: underline;
}



</style>
