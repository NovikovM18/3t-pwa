<template>
  <div class="container signin">
    <h1 class="title">Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <button @click="signIn">Submit</button>

    <RouterLink to="/auth/signup">
      SIGNUP
    </RouterLink>
    <RouterLink to="/">
      main
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
        console.log('Successfully logged in!', data);
        console.log('Successfully u', data.user);
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
