<template>
  <div class="App">
    <Header v-if="isLogin" />

    <div class="content">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script setup>
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
  import { onMounted, ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from './components/shared/Header.vue';
  import { useAuthStore } from './store/authStore'; 

  const router = useRouter()
  // let currentUser = ref(null);

  const isLogin = computed(() => {    
    return useAuthStore().isLogin
  })

  onMounted(() => {
    useAuthStore().loadAuthState()
    
    
  });



</script>


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
    
    .content {
      padding: 24px 44px;
      width: 100dvw;
      height: calc(100dvh - 66px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
