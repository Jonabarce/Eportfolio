<template>
   <div class="container-one">
      <div class="profile">
         <img src="../..//assets/Selfie.png" alt="">
         <h3>Jonatan Andre Vevang</h3>
         <p>Studying Computer Engineering at NTNU in Trondheim</p>
      </div>
      <div class="about-me">
         <p>                My name is Jonatan Andre Vevang. I come from the north of Norway.
                I am 20 years old.
                I am a student at NTNU in Trondheim,
                currently in my second year studying Computer engineering. 
         </p>
      </div>
    </div>
</template>




<style scoped>


.container-one{
      align-self: center;
    background-color: 	#3CB371;
    padding: 2.5%;
    width: 100%;
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


@media (max-width: 767px) {
    .profile img{
        height: 5rem;
    }
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

p{
   color: white;
}




</style>