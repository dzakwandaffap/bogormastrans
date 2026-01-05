<template>
  <button
    class="btn"
    :class="[variant, { block }]"
    :disabled="disabled"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "primary" }, // primary | ghost | outline
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});
defineEmits(["click"]);
</script>

<style scoped>
.btn {
  border-radius: 16px;
  padding: 12px 14px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn.block { width: 100%; }
.btn.primary {
  background: var(--gold);
  color: #fff;
}
.btn.outline {
  background: #fff;
  border-color: rgba(17, 24, 39, 0.12);
  color: #111827;
}
.btn.ghost {
  background: transparent;
  border-color: transparent;
  color: #111827;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
