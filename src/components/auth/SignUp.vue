<template>
  <div class="container signup">
    <h1 class="title">Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <button @click="register">Submit</button>

    <RouterLink to="/auth/signin">
      SIGNIN
    </RouterLink>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/');
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<style>
.signup {
  .title {
    color: #fff;
  }
}
</style>