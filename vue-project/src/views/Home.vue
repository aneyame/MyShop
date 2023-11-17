<template>
    <header>
      <h1>{{ title }}</h1>
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/about">À propos</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Votre Site Web"
      };
    }
  };
  </script>
  
  <style scoped>
    header {
      background-color: #333;
      color: #fff;
      padding: 1em;
      text-align: center;
    }
  
    nav {
      margin-top: 10px;
    }
  
    nav a {
      color: #fff;
      margin-right: 10px;
      text-decoration: none;
    }
  </style>
  