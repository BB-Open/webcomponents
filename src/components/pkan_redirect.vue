<template>
  <p>Redirect to {{ props.target }}</p>
  <button @click="click_button()">Go to page</button>
</template>

<script lang="ts" setup>


const props = defineProps({
      'target': {
        'type': String,
        'default': 'https://flask.datenadler.de',
        'required': true,
      }
    }
)

function click_button() {
  // todo: is there a better way than window
  window.location.href = props.target as string
}

</script>

<style scoped>

</style>