<template>
  <div>
    <router-link to="/">Back to Homepage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/users">Back to User List</router-link>
    <p></p>
    <h1>User Details</h1>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td style="width: 200px;"><strong>_id:</strong></td>
          <td>{{ user._id }}</td>
        </tr>
        <tr>
          <td><strong>Name:</strong></td>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <td><strong>Company Name:</strong></td>
          <td>{{ user.companyName }}</td>
        </tr>
        <tr>
          <td><strong>Remarks:</strong></td>
          <td>{{ user.remarks }}</td>
        </tr>
        <tr>
          <td><strong>Image URL:</strong></td>
          <td>{{ user.image }}</td>
        </tr>
        <tr>
          <td><strong>JobOrders:</strong></td>
          <td>{{ user.jobOrders }}</td>
        </tr>
        <!-- Add other user details rows as needed -->
      </tbody>
    </table>
    <br><br>
    <UserDetailsMap :user="user" />
  </div>
</template>

<script>
import axios from "axios"; // Import Axios
import UserDetailsMap from "@/components/UserDetailsMap.vue";

export default {
  name: "UserDetails",
  components: {
    UserDetailsMap,
  },
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const userId = this.$route.params.id;

    try {
      // Perform API call to get user
      const authToken = localStorage.getItem("authToken");
      const headers = { "x-auth-token": authToken };

      // Retrieve user details from API
      const response = await axios.get(`http://localhost:3000/users/${userId}`, { headers });
      this.user = response.data; // Update the user data with API response
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error scenario (show an error message, for example)
    }
  },
};
</script>
