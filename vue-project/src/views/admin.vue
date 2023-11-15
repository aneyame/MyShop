<template>
    <div>
      <h1>Admin Dashboard</h1>
      <!-- Your admin dashboard content goes here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin',
    beforeRouteEnter(to, from, next) {
      // Check if the user is authenticated and an admin
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user.isAdmin) {
        // Redirect to unauthorized page if not authenticated or not an admin
        next('/unauthorized');
      } else {
        next();
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  