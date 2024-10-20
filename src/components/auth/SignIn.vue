<template>
  <div class="container container-auth signin">
    <h1 class="title">Login to Your Account</h1>

    <form class="form">
      <FloatLabel variant="on">
        <InputText id="email" v-model="email" />
        <label for="email">email</label>
      </FloatLabel>
      
      <FloatLabel variant="on">
        <Password  id="password" v-model="password" :feedback="false" />
        <label for="password">password</label>
      </FloatLabel>
  
      <Button class="btn" type="submit" @click="signIn" label="submit" severity="success" />
    </form>

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
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';
  import Password from 'primevue/password';
  import Button from 'primevue/button';
  
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  .title {
    color: #fff;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .btn {
      margin-top: 12px;
      width: 100%;
    }
  }

}
</style>
