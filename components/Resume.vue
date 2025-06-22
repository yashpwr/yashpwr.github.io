<template>
  <article v-if="content.resume" class="resume" data-page="resume">
    <header v-if="content.resume.title">
      <h2 class="h2 article-title">{{ content.resume.title }}</h2>
    </header>
    <section class="timeline" v-if="content.resume.experience">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <h3 v-if="content.resume.experience.title" class="h3">{{ content.resume.experience.title }}</h3>
      </div>
      <ol class="timeline-list" v-if="content.resume.experience.items && content.resume.experience.items.length">
        <li v-for="item in content.resume.experience.items" :key="item.title" class="timeline-item">
          <h4 v-if="item.title" class="h4 timeline-item-title">{{ item.title }}</h4>
          <span v-if="item.date">{{ item.date }}</span>
          <ul v-if="item.description" style="list-style-position: inside; padding-left: 5px; margin-top: 10px">
            <li v-for="line in item.description" :key="line" class="timeline-text" style="list-style-type: disc; margin-bottom: 5px;">
              {{ line }}
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <section class="clients" v-if="content.resume.skills">
      <h3 v-if="content.resume.skills.title" class="h3 clients-title">{{ content.resume.skills.title }}</h3>
      <div v-for="group in content.resume.skills.items" :key="group.category" style="margin-bottom: 20px;">
        <h5 class="h5" style="margin-bottom: 10px; font-weight: 600;">{{ group.category }}</h5>
        <div>
          <span v-for="skill in group.values" :key="skill" class="badge">{{ skill }}</span>
        </div>
      </div>
    </section>
    <section class="timeline" v-if="content.resume.certificates">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-medal"></i>
        </div>
        <h3 v-if="content.resume.certificates.title" class="h3">{{ content.resume.certificates.title }}</h3>
      </div>
      <ol class="timeline-list" v-if="content.resume.certificates.items && content.resume.certificates.items.length">
        <li v-for="cert in content.resume.certificates.items" :key="cert.title" class="timeline-item">
          <a v-if="cert.link" :href="cert.link" target="_blank">
            <h4 v-if="cert.title" class="h4 timeline-item-title">{{ cert.title }}</h4>
          </a>
        </li>
      </ol>
    </section>
    <section class="timeline" v-if="content.resume.education">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <h3 v-if="content.resume.education.title" class="h3">{{ content.resume.education.title }}</h3>
      </div>
      <ol class="timeline-list" v-if="content.resume.education.items && content.resume.education.items.length">
        <li v-for="item in content.resume.education.items" :key="item.title" class="timeline-item">
          <h4 v-if="item.title" class="h4 timeline-item-title">{{ item.title }}</h4>
          <span v-if="item.date">{{ item.date }}</span>
          <p v-if="item.description" class="timeline-text">{{ item.description }}</p>
        </li>
      </ol>
    </section>
  </article>
</template>

<script setup>
import content from '~/assets/content.json'
</script>

<style scoped>
/* Scoped styles are not needed as global styles are applied */
</style> 