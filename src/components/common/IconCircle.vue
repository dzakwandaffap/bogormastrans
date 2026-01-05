<template>
  <div class="wrap">
    <div class="circle">{{ icon }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: "⭐" },
  label: { type: String, default: "" },
});
</script>

<style scoped>
.wrap { display: grid; justify-items: center; gap: 6px; }
.circle {
  width: 52px; height: 52px;
  border-radius: 999px;
  background: rgba(191,129,24,0.12);
  border: 1px solid rgba(191,129,24,0.18);
  display: grid;
  place-items: center;
  font-size: 20px;
}
.label { font-size: 12px; font-weight: 800; opacity: 0.75; }
</style>
