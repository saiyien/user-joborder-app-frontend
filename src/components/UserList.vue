<template>
  <div>
    <router-link to="/">Back to Homepage</router-link>
    <br><br>
    <h1>User List</h1>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user._id }}</td>
          <td>
            <router-link :to="'/user/' + user._id + '/details'">{{ user.name }}</router-link>
          </td>
          <td>{{ user.email }}</td>
          <td>{{ user.companyName }}</td>
          <td>
            <button @click="editUser(user._id)" class="btn btn-primary">Edit</button>&nbsp;&nbsp;
            <button @click="deleteUser(user._id)" class="btn btn-danger">Delete</button>
          </td>
          <!-- Add more table cells for other user properties -->
        </tr>
      </tbody>
    </table>
    <button @click="goToCreateUser" class="btn btn-success">Create New User</button>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios

export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      await this.fetchUsers();
    } catch (error) {
      console.error("Error fetching user list:", error);
      // Handle error scenario (show an error message, for example)
    }
  },
  methods: {
    goToCreateUser() {
      this.$router.push("/create-user");
    },
    async fetchUsers() {
      try {
        const authToken = localStorage.getItem("authToken"); // Retrieve the authToken from localStorage
        if (!authToken) {
          // Handle the case when authToken is not available
          console.error("No authToken available");
          return;
        }

        // Retrieve list of users from API
        console.log("Fetching user list...");

        const headers = { "x-auth-token": authToken };
        const response = await axios.get("http://localhost:3000/users", { headers });

        console.log("User list response:", response);

        this.users = response.data; // Update the users data with API response
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    },
    editUser(userId) {
      this.$router.push(`/user/${userId}/update`);
    },
    async deleteUser(userId) {
      try {
        const authToken = localStorage.getItem("authToken");
        const headers = { "x-auth-token": authToken };

        await axios.delete(`http://localhost:3000/users/${userId}`, { headers });

        // After successful deletion, refresh the user list
        await this.fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
  },
};
</script>
