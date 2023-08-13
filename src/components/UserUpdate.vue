<template>
  <div>
    <router-link to="/">Back to Homepage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/users">Back to User List</router-link>
    <p></p>
    <h1>Update User</h1>
    <form @submit.prevent="updateUser">
      <label for="name">Name:</label>&nbsp;
      <input v-model="name" type="text" id="name" />
      &nbsp;&nbsp;<br><br>
      <label for="email">Email:</label>&nbsp;
      <input v-model="email" type="email" id="email" />
      &nbsp;&nbsp;<br><br>
      <label for="companyName">CompanyName:</label>&nbsp;
      <input v-model="companyName" type="text" id="companyName" />
      &nbsp;&nbsp;<br><br>
      <label for="remarks">Remarks:</label>&nbsp;
      <input v-model="remarks" type="text" id="remarks" />
      &nbsp;&nbsp;<br><br>
      <label for="image">Image URL:</label>&nbsp;
      <input v-model="image" type="text" id="image" />
      &nbsp;&nbsp;<br><br>
      <label for="jobOrders">Job Orders:</label>
      &nbsp;&nbsp;<br><br>
      <textarea id="jobOrders" v-model="jobOrders" rows="15" cols="100">
            </textarea>
      <br><br>
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
      email: "@gmail.com",
      jobOrders: '{ "pickup": { "latitude": 3.085240600234782, "longitude": 101.67411571863492, "address": "Pearl Suria Residence" }, "dropoff": { "latitude": 3.0813456806845263, "longitude": 101.67049910187754, "address": "Midsummer Night" }, "_id": "64d844047068ed7f23c05655" }',
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
