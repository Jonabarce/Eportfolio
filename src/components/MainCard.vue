<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profil">
                    <img src="../assets/Github.png" alt="">
                    <h3>Name her</h3>
                    <p>Student</p>
                </div>
                <div class="social-links">
                        <div class="link">
                            <a href="">
                            <img src="../assets/Github.png" alt="">
                            <h2>Phone</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="">
                            <img src="../assets/Github.png" alt="">
                            <h2>Email</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="">
                            <img src="../assets/Github.png" alt="">
                            <h2>Github</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="">
                            <img src="../assets/Github.png" alt="">
                            <h2>Linkedin</h2>
                            </a>
                        </div>
                </div>
            </div>
        <div class="container-two">
            <div class="about me">
                <h1>About me</h1>
                <p>Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                    Insert information her
                </p>
            </div>
            <div class="technology-section">
                <h1>Technologies Studied</h1>
                <div class="logos">
                    <img src="../assets/Github.png" alt="">
                    <img src="../assets/Github.png" alt="">
                    <img src="../assets/Github.png" alt="">
                    <img src="../assets/Github.png" alt="">
                </div>
            </div>
            <div class="button-container">
                <div class="projectsbutton">
                    <a href="">My projects</a>
                </div>
                <div class="projectsbutton">
                    <a href="">My Resume</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



<script>
    export default {

    }


</script>



<style scoped>

.wrapper{
    display: flex;
    justify-content: center;
}

img{
    height: 50px;
}

.main-container{
    display: flex;
    flex-direction: row;
    background-color: black;
    border-radius: 25px;
    width: 85%;
}

.container-one{
    background-color: 	#3CB371;
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
}

.profile img {
    height: 5rem;
    border-radius: 50%;
}

.link a{
    text-decoration: none;
    color: whitesmoke;
    font-size: 17px;
}

.link img{
    height: 2rem;
}

.container-two{
    background: grey;
    margin: 2.5%;
    width: 70%;
}

.about-me{
    text-align: left;
}

.logos img{
    height: 2.5rem;
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
}



</style>