<template>
  <div class="header">
    <h1>header</h1>
    <img src="/favicon.svg" class="logo" alt="3t-pwa logo" />
    <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    <button @click="goSignOut()">logOut</button>
  </div>
</template>

<script setup>
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../../store/authStore';
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
    background-color: rgb(59, 59, 59);

    .logo {
        height: 58px;
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