<template>
    <div>
    <label for="fruit">Category:</label>
    <select v-model="selectedFruit" id="fruit">
      <option value="" disabled selected>Category</option>
      <option v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">{{ fruit.label }}</option>
    </select>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFruit: null, // Default selected value
        fruits: [
          { value: 'option 1', label: 'option 1' },
          { value: 'option 2', label: 'option 2' },
          { value: 'option 3', label: 'option 3' }
          // Add more fruits as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here if needed */
  </style>
  