<template>
  <div class="container container-auth signin">
    <h1 class="title">Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <button @click="signIn">Submit</button>

    <RouterLink class="nav_item" to="/auth/signup">
      <p>SIGNUP</p>
    </RouterLink>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../../store/authStore';


  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        useAuthStore().login(data.user);
        router.push('/');
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<style>
.signin {
  .title {
    color: #fff;
  }
}
</style>
