<template>
  <div>
    <Navigation 
      :active-section="activeSection" 
      @update:active-section="setActiveSection" 
    />
    
    <About :class="{ active: activeSection === 'about' }" />
    <Resume :class="{ active: activeSection === 'resume' }" />
    <Portfolio :class="{ active: activeSection === 'portfolio' }" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from '~/components/Navigation.vue'
import About from '~/components/About.vue'
import Resume from '~/components/Resume.vue'
import Portfolio from '~/components/Portfolio.vue'

const activeSection = ref('about')

const setActiveSection = (section) => {
  activeSection.value = section
}

onMounted(() => {
  // You can add any mounted logic here if needed
})

onUnmounted(() => {
  // You can add any unmounted logic here if needed
})
</script>

<style scoped>
/* Scoped styles for the index page if needed */
</style>
