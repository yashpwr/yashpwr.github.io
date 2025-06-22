<template>
  <main>
    <Sidebar />
    <div class="main-content">
      <NuxtPage />
    </div>
  </main>
</template>

<script setup>
</script>

<style>
body {
  background: hsl(0, 0%, 7%);
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
