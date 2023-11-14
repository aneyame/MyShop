<template> 
    <section>
        <h1>Home Page Hello !</h1>
        <h2> {{ message }}</h2>
        <h2> {{ list }}</h2>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello World!",
            list: [],
        };
    },
};
</script>

<style>
body{
    display :flex; 
}
</style>