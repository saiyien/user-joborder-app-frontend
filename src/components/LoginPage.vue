<template>
    <div>
      <router-link to="/">Back to Homepage</router-link>
      <br><br>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input v-model="email" type="text" id="email" />
        <button type="submit" class="btn btn-warning">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "spiderman@gmail.com",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://localhost:3000/login", {
            email: this.email,
          });
          const authToken = response.data.token; // Assuming your server returns a token field
          console.log("authToken : ", authToken);
          // Store authToken in your store or localStorage
          localStorage.setItem("authToken", authToken);
          
          this.$router.push("/users");
        } 
        catch (error) {
          console.error("Login error:", error);
        }
      },
    },
  };
  </script>
  