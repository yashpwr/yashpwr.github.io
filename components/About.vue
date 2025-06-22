<template>
  <article v-if="content.about" class="about" data-page="about">
    <header v-if="content.about.title">
      <h2 class="h2 article-title">{{ content.about.title }}</h2>
    </header>
    <section class="about-text" v-if="content.about.description && content.about.description.length">
      <p v-for="(paragraph, index) in content.about.description" :key="index">{{ paragraph }}</p>
    </section>
    <!-- service -->
    <section class="service" v-if="content.about.services">
      <h3 v-if="content.about.services.title" class="h3 service-title">{{ content.about.services.title }}</h3>
      <ul class="service-list" v-if="content.about.services.items && content.about.services.items.length">
        <li v-for="service in content.about.services.items" :key="service.title" class="service-item">
          <div class="service-icon-box" v-if="service.icon">
            <img :src="service.icon" :alt="service.title + ' icon'" width="50" />
          </div>
          <div class="service-content-box">
            <h4 v-if="service.title" class="h4 service-item-title">{{ service.title }}</h4>
            <p v-if="service.text" class="service-item-text">{{ service.text }}</p>
          </div>
        </li>
      </ul>
    </section>
    <!-- testimonials -->
    <section class="testimonials" v-if="content.about.testimonials">
      <h3 v-if="content.about.testimonials.title" class="h3 testimonials-title">{{ content.about.testimonials.title }}</h3>
      <ul class="testimonials-list has-scrollbar" v-if="content.about.testimonials.items && content.about.testimonials.items.length">
        <li v-for="testimonial in content.about.testimonials.items" :key="testimonial.id" class="testimonials-item">
          <div class="content-card" @click="openTestimonialModal(testimonial)">
            <figure v-if="testimonial.avatar" class="testimonials-avatar-box">
              <img :src="testimonial.avatar" :alt="testimonial.name" width="60" />
            </figure>
            <h4 v-if="testimonial.name" class="h4 testimonials-item-title">{{ testimonial.name }}</h4>
            <h4 v-if="testimonial.title" class="h4 testimonials-item-sub-title">{{ testimonial.title }}</h4>
            <div v-if="testimonial.text" class="testimonials-text" v-html="testimonial.text"></div>
          </div>
        </li>
      </ul>
    </section>
    <!-- testimonials-modal -->
    <div class="modal-container" :class="{ active: isModalActive }">
      <div v-if="isModalActive" class="overlay" :class="{ active: isModalActive }" @click="closeTestimonialModal"></div>
      <section v-if="selectedTestimonial" class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonialModal">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box" v-if="selectedTestimonial.avatar">
            <img :src="selectedTestimonial.avatar" alt="Name" width="80" />
          </figure>
          <img src="/assets/images/testimonials/icon-quote.svg" alt="quote icon" />
        </div>
        <div class="modal-content">
          <h4 v-if="selectedTestimonial.name" class="h3 modal-title">{{ selectedTestimonial.name }}</h4>
          <h4 v-if="selectedTestimonial.title" class="h5 modal-title">{{ selectedTestimonial.title }}</h4>
          <div v-if="selectedTestimonial.text" v-html="selectedTestimonial.text"></div>
        </div>
      </section>
    </div>
    <!-- clients -->
    <section class="clients" v-if="content.about.clients">
      <h3 v-if="content.about.clients.title" class="h3 clients-title">{{ content.about.clients.title }}</h3>
      <ul class="clients-list has-scrollbar" v-if="content.about.clients.items && content.about.clients.items.length">
        <li v-for="client in content.about.clients.items" :key="client.alt" class="clients-item">
          <img v-if="client.logo" :src="client.logo" :alt="client.alt + ' logo'" />
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import content from '~/assets/content.json'

const isModalActive = ref(false)
const selectedTestimonial = ref(null)

const openTestimonialModal = (testimonial) => {
  selectedTestimonial.value = testimonial
  isModalActive.value = true
}

const closeTestimonialModal = () => {
  isModalActive.value = false
}

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isModalActive.value) {
      closeTestimonialModal()
    }
  }
  document.addEventListener('keydown', handleEscape)
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Scoped styles are not needed as global styles are applied */
</style> 