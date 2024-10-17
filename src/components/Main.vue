<template>
  <div class="main">
    <nav class="nav">
      <RouterLink class="nav_item" activeClass="nav_item--active" to="/dashboard">
        <p>DASHBOARD</p>
      </RouterLink>
      <RouterLink class="nav_item" activeClass="nav_item--active" to="/tasks">
        <p>TASKS</p>
      </RouterLink>
      <RouterLink class="nav_item" v-if="!isLogin" to="/auth/signin">
        <p>SIGNIN</p>
      </RouterLink>
    </nav>


    <div class="container">
      <h1>MAIN == {{ text }}</h1>
  
      <div class="content">
        <router-view v-model:model="text"></router-view>
      </div> 
  
      <!-- <Tasks v-model:model="text"/> -->
  
    </div>
  </div>
</template>

<script setup>
  import { useAuthStore } from '../store/authStore';
  import { onMounted, ref, computed } from 'vue'
  import Tasks from './main/Tasks.vue';


  const text = ref('default text')

  const isLogin = computed(() => {    
    return useAuthStore().isLogin
  })


  onMounted(() => {
    
  })
</script>

<style scoped>
  .main {
    position: relative;
    padding: 24px 44px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .nav {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
</style>