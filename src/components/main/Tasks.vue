<template>
  <div class="container tasks">
    <h1>tasks</h1>

    <p>{{ model }}</p>
    <input type="text" v-model="model">
  </div>
</template>

<script setup>
  const model = defineModel('model', { required: false, type: String });
</script>

<style scoped>

</style>