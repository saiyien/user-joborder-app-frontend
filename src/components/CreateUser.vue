<template>
    <div>
        <router-link to="/">Back to Homepage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/users">Back to User List</router-link>
        <p></p>
        <h1>Create New User</h1>
        <form @submit.prevent="createUser">
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
            jobOrders: '{ "pickup": { "latitude": 3.085240600234782, "longitude": 101.67411571863492, "address": "Pearl Suria Residence" }, "dropoff": { "latitude": 3.0813456806845263, "longitude": 101.67049910187754, "address": "Midsummer Night" }, "_id": "64d844047068ed7f23c05655" }',
            // Add other data properties as needed
        };
    },
    methods: {
        async createUser() {
            try {
                const response = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    companyName: this.companyName,
                    remarks: this.remarks,
                    image: this.image,
                    jobOrders: this.jobOrders,
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
  