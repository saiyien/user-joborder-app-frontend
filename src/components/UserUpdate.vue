<template>
  <div>
    <router-link to="/">Back to Homepage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/users">Back to User List</router-link>
    <p></p>
    <h1>Update User</h1>
    <form @submit.prevent="updateUser">
      <label>_id:</label>
      <input v-model="userId" type="text" size="30" disabled />
      <br><br>
      <label>Name:</label>&nbsp;
      <input v-model="name" type="text" />
      &nbsp;&nbsp;
      <label>Email:</label>&nbsp;
      <input v-model="email" type="text" />
      &nbsp;&nbsp;
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios

export default {
  name: "UserUpdate",
  data() {
    return {
      userId: this.$route.params.id,
      name: "",
      email: "",
    };
  },
  methods: {
    async updateUser() {
      const userId = this.$route.params.id;

      try {
        // Perform API call to update user
        const authToken = localStorage.getItem("authToken");
        const headers = { "x-auth-token": authToken };

        // Create the request body
        const requestBody = {
          name: this.name,
          email: this.email,
        };

        await axios.put(`http://localhost:3000/users/${userId}`, requestBody, { headers });

        // Redirect to user details page after update
        this.$router.push("/users");
      } catch (error) {
        console.error("Error updating user:", error);
        // Handle error scenario (show an error message, for example)
      }
    },
  },
};
</script>
