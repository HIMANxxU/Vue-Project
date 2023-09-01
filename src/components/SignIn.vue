<template>
      <div>
    <img src="../assets/logo-ipsum-2.png" alt="" />
    <h1>Sign In</h1>

    <div class="main-div">
   
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
        <button v-on:click="signUp">Sign In</button>
      </div>
      <div class="sub-div">
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </div>
    
</template>
<script>
export default{
    name:"SignIn",
    data() {
    return {
      eyeBoolen: false,
      userData: {
      
        email: "",
        password: ""
      },
    };
  },
}


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
