<template>
  <article v-if="content.portfolio" class="portfolio" data-page="portfolio">
    <header v-if="content.portfolio.title">
      <h2 class="h2 article-title">{{ content.portfolio.title }}</h2>
    </header>
    <section class="projects">
      <ul class="filter-list" v-if="content.portfolio.filters && content.portfolio.filters.length">
        <li v-for="filter in content.portfolio.filters" :key="filter" class="filter-item">
          <button
            :class="{ active: activeFilter === filter }"
            @click="filterProjects(filter)"
          >
            {{ filter }}
          </button>
        </li>
      </ul>
      <div class="filter-select-box" v-if="content.portfolio.filters && content.portfolio.filters.length">
        <select
          class="filter-select"
          @change="filterProjects($event.target.value)"
        >
          <option v-for="filter in content.portfolio.filters" :key="filter" :value="filter">{{ filter }}</option>
        </select>
      </div>
      <ul class="project-list" v-if="filteredProjects && filteredProjects.length">
        <li
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-item"
          :class="{ active: activeFilter === 'All' || project.category === activeFilter }"
          :data-category="project.category"
          @click="openProjectModal(project)"
        >
          <a href="#">
            <figure v-if="project.image" class="project-img">
              <div class="project-item-icon-box">
                <i class="fa-solid fa-eye"></i>
              </div>
              <img :src="project.image" :alt="project.title" loading="lazy" />
            </figure>
            <h3 v-if="project.title" class="project-title">{{ project.title }}</h3>
            <p v-if="project.category" class="project-category">{{ project.category }}</p>
          </a>
        </li>
      </ul>
      <!-- Modal -->
      <div class="modal-container" :class="{ active: isModalActive }">
        <div
          v-if="isModalActive"
          class="overlay"
          :class="{ active: isModalActive }"
          @click="closeProjectModal"
        ></div>
        <section v-if="selectedProject" class="testimonials-modal">
          <button class="modal-close-btn" @click="closeProjectModal">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="modal-img-wrapper">
            <figure v-if="selectedProject.image" class="modal-avatar-box">
              <img :src="selectedProject.image" :alt="selectedProject.title" />
            </figure>
          </div>
          <div class="modal-content">
            <h4 v-if="selectedProject.title" class="h3 modal-title">{{ selectedProject.title }}</h4>
            <div class="project-info">
              <p v-if="selectedProject.category" class="project-detail">
                <strong>Category:</strong> {{ selectedProject.category }}
              </p>
              <p v-if="selectedProject.link" class="project-detail">
                <strong>Link:</strong>
                <a :href="selectedProject.link" target="_blank">{{
                  selectedProject.link
                }}</a>
              </p>
            </div>
            <p v-if="selectedProject.description" class="project-description">{{ selectedProject.description }}</p>
          </div>
        </section>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from "vue";
import content from '~/assets/content.json'

const activeFilter = ref("All");
const projects = ref(content.portfolio.projects);

const isModalActive = ref(false);
const selectedProject = ref(null);

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category === activeFilter.value
  );
});

const filterProjects = (category) => {
  activeFilter.value = category;
};

const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalActive.value = true;
};

const closeProjectModal = () => {
  isModalActive.value = false;
};
</script>

<style scoped>
/* Scoped styles are not needed as global styles are applied */
</style>
