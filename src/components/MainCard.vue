<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-two">
            <div class="about 1me">
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
                    <img src="../assets/java.png" alt="">
                    <img src="../assets/python.png" alt="">
                    <img src="../assets/html-5.png" alt="">
                    <img src="../assets/css-3.png" alt="">
                    <img src="../assets/js.png" alt="">
                    <img src="../assets/vue.png" alt="">
                    <img src="../assets/mysql.png" alt="">
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
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/Selfie.png" alt="">
                    <h3>Jonatan Andre Vevang</h3>
                    <p>Studying Computer Engineering at NTNU in Trondheim</p>
                </div>
                <div class="social-links">
                        <div class="link">
                            <a href="">
                            <img src="../assets/Phone.png" alt="">
                            <h2>Phone</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="mailto:javevang1@gmail.com">
                            <img src="../assets/Email.png" alt="">
                            <h2>Email</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://github.com/Jonabarce">
                            <img src="../assets/Github.png" alt="">
                            <h2>Github</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://www.linkedin.com/in/jonatan-andre-vevang-53120b263/">
                            <img src="../assets/Linkedin.png" alt="">
                            <h2>Linkedin</h2>
                            </a>
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

.profile{
    color: white;
    font-size: 17px;
}

.profile img {
    height: 10rem;
    border-radius: 50%;
}

.link a{
    text-decoration: none;
    color: whitesmoke;
    font-size: 17px;
}

.link img{
    height: 4rem;
    border-radius: 50%;
}

.about-me p{
    font-size: 25px;
}



.container-two{
    background: #C0C0C0;
    margin: 2.5%;
    width: 70%;
    color: black;
}

.about me{
    text-align: left;
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
    font-size: 20px;
}



</style>