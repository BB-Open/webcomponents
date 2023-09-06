<template>
<p>Params</p>
  <p>{{searchURL}}</p>
  <p>huhu: {{searchURL.get('huhu')}}</p>
  <p>hallo: {{searchURL.get('hallo')}}</p>
</template>

<script lang="ts" setup>

// todo: is there a better way than window
const searchURL = new URL(window.location.href as string).searchParams as URLSearchParams;
console.log(searchURL)

</script>

<style scoped>

</style>