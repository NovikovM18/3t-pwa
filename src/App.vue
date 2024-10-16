<script setup>
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
  import { onMounted, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from './components/Header.vue'


  const router = useRouter()
  let currentUser = reactive({});

  onMounted(() => {
    onAuthStateChanged(getAuth(), (user) => {
      currentUser.value = user
    });
    
  });



</script>

<template>
  <div class="App">
    <Header v-if="currentUser.value?.uid" />
    <div class="content">
      <router-view></router-view>
    </div> 
  </div>
</template>

<style scoped>
  .App {
    position: relative;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #242424;

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
      filter: drop-shadow(0 0 2em #42b883aa);
    }
  }
</style>
