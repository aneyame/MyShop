<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
  <div id="app">
    <div class="top-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
        <div class="search">
           <input type="text" placeholder="Search..">
           <button type="submit" @click="search"><i class="fa fa-search"></i></button>
        </div>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    
    <router-view></router-view>
  </div>


</template>


<script>
export default {
  name: 'App',
  methods: {
    search() {
      // Handle the search logic here
      console.log('Search button clicked');
    },
  },
};
</script> 

<style>

.top-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa; 
  padding: 10px;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 8px;
  width: 100%;
  margin-right: 2px; /* Add some space between the input and the button */
}

.search button {
  padding: 8px;
  background: #ddd; /* Add your preferred button styles */
  color: #fff;
  border: none;
  cursor: pointer;
}
.top-nav .search button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .top-nav {
    flex-direction: column;
    text-align: center;
    align-items: left;
  }

  .search {
    margin: 10px 0;
  }
}

</style>
