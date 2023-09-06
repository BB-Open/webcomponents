<template>
  <div>
    <h2>Open-Data-Roulette (zufällig ausgewählter Datensatz)</h2>
    <h3>{{entityStore.input_text}}</h3>
    <div class='dataset' v-if="entityStore.roulette">
      <h3 class="dataset_title">{{ entityStore.roulette.dct_title }}</h3>
      <div>
        <p class="dct_description" v-if='entityStore.roulette.dct_description'>
          {{ entityStore.roulette.dct_description[0] }}</p>
      </div>
      <div>
        <a v-if="entityStore.roulette.dct_title" :href="'https://datenadler.de/dataset' + encodeURIComponent(entityStore.roulette.id)"
                  :aria-label="entityStore.roulette.dct_title + ' weiterlesen'">
          Weiterlesen
        </a>
      </div>
    </div>
    <div v-else class="dataset">
      Der Datensatz wird noch geladen.
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useEntityStore} from "../stores/entities";
import {onMounted} from "vue";

const entityStore = useEntityStore()

onMounted( () => {
      entityStore.get_roulette()
    }
)

</script>

<style scoped>

</style>