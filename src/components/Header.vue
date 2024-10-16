<template>
  <div class="header">
    header
    <button @click="goSignOut()">logOut</button>
  </div>
</template>

<script setup>
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../store/authStore';
  const router = useRouter()


  const goSignOut = () => {
    signOut(getAuth()).then(() => {
      useAuthStore().logout();
      router.push('/auth/signin')
    })
  };

</script>

<style scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 66px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gray;

  }
</style>