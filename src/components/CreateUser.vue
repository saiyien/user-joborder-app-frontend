<template>
    <div>
        <router-link to="/">Back to Homepage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/users">Back to User List</router-link>
        <p></p>
        <h1>Create New User</h1>
        <form @submit.prevent="createUser">
            <label for="name">Name:</label>&nbsp;
            <input v-model="name" type="text" id="name" />
            &nbsp;&nbsp;
            <label for="email">Email:</label>&nbsp;
            <input v-model="email" type="email" id="email" />
            &nbsp;&nbsp;
            <button type="submit" class="btn btn-primary">Create User</button>
        </form>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "CreateUser",
    data() {
        return {
            name: "",
            email: "@gmail.com",
            // Add other data properties as needed
        };
    },
    methods: {
        async createUser() {
            try {
                const response = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    // Include other data properties in the request
                });
                console.log("User created:", response.data);

                // Redirect back to the User List page
                this.$router.push("/users");
            } catch (error) {
                console.error("Error creating user:", error);
                // Handle error scenario (show an error message, for example)
            }
        },
    },
};
</script>
  