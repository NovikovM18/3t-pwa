<template>
  <div class="container tasks">
    <h1>Tasks</h1>


    <FloatLabel variant="on">
      <InputText id="model" type="text" v-model="model" />
      <label for="model">model</label>
    </FloatLabel>
    
  </div>
</template>

<script setup>
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';

  const model = defineModel('model', { required: false, type: String });
</script>

<style scoped>
  .p-inputtext {
    /* font-size: 54px; */
  }
</style>