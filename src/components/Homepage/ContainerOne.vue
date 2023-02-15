<template>
    <div class="container-one">
      <div class="profile">
        <img src="../..//assets/Selfie.png" alt="">
        <h3>Jonatan Andre Vevang</h3>
        <p>Studying Computer Engineering at NTNU in Trondheim</p>
      </div>
      <div class="social-links">
        <div class="link">
          <a @click.prevent="openPhoneModal()" href="">
            <img src="../..//assets/Phone.png" alt="">
            <h2>Phone</h2>
          </a>
          <div class="modal-overlay" v-if="showPhoneModal" @click="closePhoneModal()">
            <div class="modal-container" @click.stop>
                <br>
                <a id="phonenumber" href="tel:+4792200181">+47 922 00 181</a>
              <button @click="closePhoneModal()">Close</button> 
            </div>
          </div>
        </div>
        <div class="link">
          <a href="mailto:javevang1@gmail.com">
            <img src="../..//assets/Email.png" alt="">
            <h2>Email</h2>
          </a>
        </div>
        <div class="link">
          <a href="https://github.com/Jonabarce" target="_blank">
            <img src="../..//assets/Github.png" alt="">
            <h2>Github</h2>
          </a>
        </div>
        <div class="link" target="_blank">
          <a href="https://www.linkedin.com/in/jonatan-andre-vevang-53120b263/" target="_blank">
            <img src="../..//assets/Linkedin.png" alt="">
            <h2>Linkedin</h2>
          </a>
        </div>
      </div>
      <div class="button-container">
        <div class="projectsbutton">
          <button @click="openCreditModal()">Icon credits</button>
        </div>
      </div>
      <div class="modal-overlay" v-if="showCreditModal" @click="closeCreditModal()">
        <div class="modal-container" @click.stop>
          <button @click="closeCreditModal()">Close</button> 
                <a href="https://www.flaticon.com/free-icons/java" title="java icons">Java icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/python-file" title="python file icons">Python file icons created by Flat Icons - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>                
                <br>
                <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://icons8.com/icon/rY6agKizO9eb/vue-js">Vue Js</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql icons created by Freepik - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/telephone" title="telephone icons">Telephone icons created by Ilham Fitrotul Hayat - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>
                <br>
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPhoneModal: false,
        showCreditModal: false
      }
    },
    methods: {
      changeRoute(string) {
        this.$router.push({ name: string });
      },
      openPhoneModal() {
        this.showPhoneModal = true;
      },
      closePhoneModal() {
        this.showPhoneModal = false;
      },
      openCreditModal() {
        this.showCreditModal = true;
      },
      closeCreditModal() {
        this.showCreditModal = false;
      }
    }
  };
  </script>
  

<style scoped>

body.modal-open {
  overflow: hidden;
}

button{
    background-color: black;
    border: solid 2px white;
    border-radius: 15px;
    padding: 10px;
    margin: 50px;
    color: white;
    font-size: 15px;
}

.button-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
}

.projectsbutton{
    
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
}

button:hover{
    cursor: pointer;
}



.modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
    height: 200px;
    overflow: auto;
    text-align: center;
    font-size: 15px;
}


#phonenumber{
    color: black;
    font-size: 25px;
}


.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.container-one{
    background-color: 	#3CB371;
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
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



</style>