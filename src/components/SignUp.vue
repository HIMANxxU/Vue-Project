<template>
  <div>
    <img src="../assets/logo-ipsum-2.png" alt="" />
    <h1>Sign Up</h1>

    <div class="main-div">
      <div class="sub-div">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name..."
          v-model="userData.name" />
      </div>
      <div class="sub-div">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email..."
          v-model="userData.email" />
      </div>
      <div class="sub-div password-div">
        <input
          :type="eyeBoolen ? 'text' : 'password'"
          name="email"
          id="email"
          placeholder="Enter Password..."
          v-model="userData.password" />
        <div v-on:click="eyeBoolen = !eyeBoolen" class="password">
          <i v-if="eyeBoolen" class="fas fa-eye-slash"></i>
          <i v-else class="fas fa-eye"></i>
        </div>
      </div>
      <div class="sub-div">
        <button v-on:click="signUp">Sign up</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      eyeBoolen: false,
      userData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  beforeMount(){
    
    const user=JSON.parse(localStorage.getItem("userData"))
    if(user){
        this.$router.push("/home")
    }
    


   
},
  methods: {
    async signUp() {
      console.log(this.userData);
      let result = await axios.post("http://localhost:3000/user", {
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.password,
      });
      if (result.status == 201) {
        alert("User registered succesfully");
        localStorage.setItem("userData", JSON.stringify(result.data));
        this.$router.push("/home")
      }
    }
  },
};
</script>
<style scoped>
h1 {
  margin-block: 25px;
}
img {
  width: 300px;
}
.main-div {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.password-div {
  width: 25vw;
  position: relative;
  margin: auto;
}
.sub-div input {
  width: 25vw;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 10px;
}
.sub-div input:focus {
  outline: none;
}
.sub-div button {
  width: 25vw;
  height: 35px;
  background-color: #cccccc;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.sub-div button:hover {
  cursor: pointer;
}
.password {
  position: absolute;
  right: 10px;
  bottom: 5px;
}
</style>
