<template>
  <button class="chip" :class="{ active }" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({ active: { type: Boolean, default: false } });
defineEmits(["click"]);
</script>

<style scoped>
.chip {
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(17, 24, 39, 0.10);
  background: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  color: #111827;
}
.chip.active {
  background: rgba(191, 129, 24, 0.12);
  border-color: rgba(191, 129, 24, 0.25);
  color: var(--gold-dark);
}
</style>
