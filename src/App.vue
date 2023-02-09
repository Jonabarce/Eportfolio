<template>
  <main-card/>
  <ProjectsCard/>
</template>

<script>
import MainCard from './components/MainCard.vue';
import ProjectsCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    MainCard,
    ProjectsCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
