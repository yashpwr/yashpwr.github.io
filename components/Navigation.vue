<template>
  <nav class="navbar" v-if="content.navigation && content.navigation.length">
    <ul class="navbar-list">
      <li v-for="item in content.navigation" :key="item.page" class="navbar-item">
        <button
          v-if="item.page && item.name"
          class="navbar-link"
          :class="{ active: activeSection === item.page }"
          @click="setActiveSection(item.page)"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import content from '~/assets/content.json'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'about'
  }
})

const emit = defineEmits(['update:activeSection'])

const setActiveSection = (section) => {
  emit('update:activeSection', section)
}
</script>

<style scoped>
/* Scoped styles are not needed as global styles are applied */
</style> 