<template>
  <div id="login" class="flex justify-center">
    <div class="w-full max-w-sm">
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-semibold">Sign In</h1>
        <p class="text-sm">Sign in to access your account</p>
      </div>
      <div class="form-group">
        <div class="form-field">
          <label class="form-label">Email address</label>
          <input v-model="email" placeholder="Type here" type="email" class="input max-w-full" />
          <label class="form-label">
            <span class="form-label-alt">Please enter a valid email.</span>
          </label>
        </div>
        <div class="form-field">
          <label class="form-label">Password</label>
          <div class="form-control">
            <input v-model="password" placeholder="Type here" type="password" class="input max-w-full" />
          </div>
        </div>
        <div class="form-field">
          <div class="form-control justify-between">
            <div class="flex gap-2">
              <input type="checkbox" class="checkbox" />
              <a href="#">Remember me</a>
            </div>
            <label class="form-label">
              <a class="link link-underline-hover link-primary text-sm">Forgot your password?</a>
            </label>
          </div>
        </div>
        <div class="form-field pt-5">
          <div class="form-control justify-between">
            <button @click="login" class="btn btn-primary w-full">Login</button>
          </div>
        </div>
        <div class="form-field">
          <div class="form-control justify-center">
            <a class="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost/authentication_token', {
            email: this.email,
            password: this.password,
            });

             // Log the entire response for debugging purposes
            console.log('API Response:', response.status);

            // Check the status code
            if (response.status === 200) {
                 // Redirect to another route after successful login
                // this.$router.push('/admin'); 
                console.log('Enter here')

                const user = JSON.parse(localStorage.getItem('user'));

                if (!user || !user.roles.includes('ROLE_ADMIN')) {
                // Redirect to unauthorized page if not authenticated or not an admin
                this.$router.push('/admin');
                } else {
                this.$router.push();
                }

            } else if (response.status === 401) {
                // Show an error message for unauthorized access
                 console.error('Unauthorized access:', response.status);
                alert('Login failed. Please check your credentials and try again.');

            } else {
                // Handle other status codes if needed
                console.error('Error during login:', response.status);
                alert('An error occurred during login');
            }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      }
    },
  };

  </script>
  
<style>
#app{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


