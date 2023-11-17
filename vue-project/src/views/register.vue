<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="flex justify-center">
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6 pt-[100px]">
            <div class="flex flex-col items-center">
                <h1 class="text-3xl font-semibold">Register</h1>
                <p class="text-sm">Create a new account</p>
            </div>
            <div class="form-group">
                <div class="form-field">
                    <label class="form-label">Name</label>
                    <div class="form-control">
                        <input placeholder="Type here" class="input max-w-full" />
                    </div>
                </div>
                <div class="form-field">
                    <label class="form-label">Email address</label>
        
                    <input placeholder="Type here" type="email" class="input max-w-full" />
                    <label class="form-label">
                        <span class="form-label-alt">Please enter a valid email.</span>
                    </label>
                </div>
                <div class="form-field">
                    <label class="form-label">Password</label>
                    <div class="form-control">
                        <input placeholder="Type here" type="password" class="input max-w-full" />
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
                        <button class="btn btn-primary w-full">Login</button>
                    </div>
                </div>
        
                <div class="form-field">
                    <div class="form-control justify-center">
                        <h2 class="registerlink">You have already an account?</h2><router-link class="register" to="/login">Sign In</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>


