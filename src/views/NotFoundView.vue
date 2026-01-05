<template>
  <div class="nf">
    <h1>404</h1>
    <p>Halaman tidak ditemukan.</p>
    <RouterLink to="/">Kembali</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.nf { min-height: 100vh; display: grid; place-items: center; gap: 8px; background: var(--bg); }
</style>
