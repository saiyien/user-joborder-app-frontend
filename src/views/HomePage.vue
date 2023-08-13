<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the User Job Order App!</p>
    <p></p>
    <button @click="goToCreateUser" class="btn btn-success">Create New User</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="navigateToUserLogin" class="btn btn-primary">Go to Login</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="navigateToUserList" class="btn btn-danger">Show User List</button>
  </div>
</template>

<script setup>
// Any script setup you need
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCreateUser = () => {
  router.push('/create-user'); // Navigate to the UserList route
};

const navigateToUserList = () => {
  router.push('/users'); // Navigate to the UserList route
};

const navigateToUserLogin = () => {
  router.push('/login'); // Navigate to the User Login route
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
