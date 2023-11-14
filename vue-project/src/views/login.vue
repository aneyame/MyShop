<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <br>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  
  
  <script>

//     methods: {
//       login() {
//         const user = users.find(u => u.username === this.username && u.password === this.password);
//         if (user) {
//           localStorage.setItem('user', JSON.stringify(user));
//           this.$router.push('/admin');
//         } else {
//           alert('Invalid username or password');
//         }
//       },
//     },
//   };
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
  try {
    const response = await axios.get('http://localhost/api/users', {
      auth: {
        username: this.username,
        password: this.password,
      },
    });

    console.log('API Response:', response);

  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login');
  }
}

  },
};


  </script>