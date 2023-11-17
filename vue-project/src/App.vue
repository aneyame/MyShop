<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
  <div>
    <nav class="navbar">
      <div class="navbar-left">
        <router-link  class="page-name" to="/">{{ pageName }}</router-link>
      </div>
      <div class="navbar-middle">
        <input v-model="searchQuery" type="text" placeholder="Search..." class="search-bar" />
        <button @click="search" class="search-button">
          🔍 <!-- Generic search icon -->
        </button>
      </div>
      <div class="navbar-right">
        <router-link  class="search-button" to="/login">Login</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      pageName: "My Shop",
      searchQuery: ""
    };
  },
  methods: {
    login() {
      // Implement your login functionality here
      console.log("Login clicked");
    },
    search() {
      // Implement your search functionality here
      console.log("Search clicked");
    }
  }
};
</script> 


<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar-middle {
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 10px 50px;
}

.page-name {
  color: #fff;
}

.search-bar {
  width: 100%; /* Adjust the width as needed */
  padding: 5px;
}

.search-button {
  margin-left: 5px;
  padding: 5px;
  background-color: #fff;
  color: #333;
  border: none;
  cursor: pointer;
}

button i {
  margin-right: 5px; /* Add some spacing between the icon and the text */
}

button {
  padding: 8px;
  background-color: #fff;
  color: #333;
  border: none;
  cursor: pointer;
}

.content {
  margin-top: 70px; /* Adjust this value based on your navbar height */
  padding: 20px;
}
</style>