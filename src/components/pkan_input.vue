<template>
  <div>
    <button
      @click="entityStore.get_roulette"
    >Spiel Open Data Roulette</button>
    <input v-model="entityStore.input_text">
  </div>
</template>

<script lang="ts" setup>

import {useEntityStore} from "../stores/entities";

const entityStore = useEntityStore()

</script>

<style scoped>

</style>