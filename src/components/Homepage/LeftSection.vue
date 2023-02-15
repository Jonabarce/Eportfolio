<template>
    <div class="container-one">
      <div class="profile">
        <img src="../..//assets/Selfie.png" alt="">
        <h3>Jonatan Andre Vevang</h3>
        <p>Studying Computer Engineering at NTNU in Trondheim</p>
      </div>
      <div class="about-me">
        <p>                My name is Jonatan Andre Vevang. I'm from the north of Norway.
                I am 20 years old, and
                a student at NTNU in Trondheim.
                Currently i'm my second year studying computer engineering. 

          
        </p>
      </div>
    </div>
  </template>
  
<script>
    function downloadResume() {
      const fileUrl = 'path/to/resume.pdf'; // Replace with the actual path to your PDF file
      const fileName = 'resume.pdf';
  
      fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          // Create a link element with a download attribute to download the PDF file
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(new Blob([blob]));
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    }
</script>
  


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


button{
    background-color: black;
    border: solid 2px white;
    border-radius: 15px;
    padding: 10px;
    color: white;
    font-size: 15px;
}

button:hover{
    cursor: pointer;
    text-decoration: underline;
}



</style>