<template> 
    <section>
        <h1>Home Page Hello !</h1>
        <h2> {{ message }}</h2>
        <h2> {{ getList }}</h2>
    </section>
</template>

<script>
// import {mapActions, mapState} from "pinia";
// import {useList} from "../stores/counter";

export default {
    data() {
        return {
            message: "Hello World!",
            list: [],
        };
    },
    // mounted(){
    //     this.fetchList;
    // },
    // computed: {
    //     ...mapActions(useList,["fetchList"]),
    //     ...mapState(useList, ["getList"])
    // },
    // methods: {
        
    // },
};
</script>

<style>
body{
    display :flex; 
}
</style>