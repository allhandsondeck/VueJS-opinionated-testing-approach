<script setup lang="ts">
defineProps<{
  msg: string
}>()

// Pure function that can be easily moved to composable
const getTimeBasedGreeting = (hour: number): string => {
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 22) return 'Good evening'
  return 'Good night'
}

// Using the pure function
const currentGreeting = getTimeBasedGreeting(new Date().getHours())
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ currentGreeting }}, {{ msg }}</h1>
    <h3>
      You've successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
