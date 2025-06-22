<template>
  <aside v-if="content.sidebar" class="sidebar" :class="{ active: isSidebarActive }">
    <div class="sidebar-info">
      <figure class="avatar-box" v-if="content.sidebar.avatar">
        <img :src="content.sidebar.avatar" :alt="content.sidebar.name" />
      </figure>
      <div class="info-content">
        <h1 v-if="content.sidebar.name" class="name" :title="content.sidebar.name">{{ content.sidebar.name }}</h1>
        <p v-if="content.sidebar.title" class="title">{{ content.sidebar.title }}</p>
      </div>
      <button class="info_more-btn" @click="toggleSidebar">
        <span>Show Contacts</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>
    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ul v-if="content.sidebar.contacts && content.sidebar.contacts.length" class="contacts-list">
        <li v-for="contact in content.sidebar.contacts" :key="contact.title" class="contact-item">
          <div class="icon-box" v-if="contact.icon">
            <i :class="contact.icon"></i>
          </div>
          <div class="contact-info">
            <p v-if="contact.title" class="contact-title">{{ contact.title }}</p>
            <a v-if="contact.link" :href="contact.link" class="contact-link" :download="contact.download">{{ contact.text }}</a>
            <address v-else-if="contact.text">{{ contact.text }}</address>
          </div>
        </li>
      </ul>
      <div class="separator"></div>
      <ul v-if="content.sidebar.socials && content.sidebar.socials.length" class="social-list">
        <li v-for="social in content.sidebar.socials" :key="social.link" class="social-item">
          <a v-if="social.link" :href="social.link" target="_blank" class="social-link">
            <i v-if="social.icon" :class="social.icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import content from '~/assets/content.json'

const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}
</script>

<style scoped>
/* Scoped styles are not needed as global styles are applied */
</style> 