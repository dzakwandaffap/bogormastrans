<template>
  <div class="card">
    <div class="badge-row">
      <span v-for="b in car.badges" :key="b" class="badge">{{ b }}</span>
      <span class="fav">♡</span>
    </div>

    <img class="img" :src="car.image" :alt="car.name" />

    <div class="body">
      <div class="title-row">
        <div>
          <div class="name">{{ car.name }}</div>
          <div class="sub">{{ car.type }} • {{ car.transmission }} • {{ car.fuel }}</div>
        </div>
        <span class="status" :class="statusClass">{{ car.status }}</span>
      </div>

      <div class="meta">
        <span>{{ car.seats }} Seats</span>
        <span>•</span>
        <span>{{ formatIDR(car.dailyRate) }}/day</span>
      </div>

      <div class="actions">
        <AppButton variant="outline" @click="$router.push({ name: 'car-detail', params: { id: car.id } })">
          View Details
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../common/AppButton.vue";

const props = defineProps({ car: { type: Object, required: true } });

const statusClass = computed(() => {
  if (props.car.status === "Available") return "ok";
  return "warn";
});

function formatIDR(n) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(n);
}
</script>

<script>
import { computed } from "vue";
export default {};
</script>

<style scoped>
.card {
  border-radius: 18px;
  background: #fff;
  border: 1px solid rgba(17, 24, 39, 0.08);
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(17, 24, 39, 0.06);
  margin-bottom: 14px;
}
.badge-row {
  position: absolute;
  display: flex;
  gap: 8px;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  z-index: 2;
}
.badge {
  background: rgba(191, 129, 24, 0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 11px;
}
.fav {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(17, 24, 39, 0.08);
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 900;
}
.img { width: 100%; height: 160px; object-fit: cover; display: block; }
.body { padding: 12px; }
.title-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}
.name { font-weight: 900; color: #111827; }
.sub { font-size: 12px; opacity: 0.7; margin-top: 2px; }
.status {
  font-size: 11px;
  font-weight: 900;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(17, 24, 39, 0.08);
}
.status.ok { color: #065f46; background: rgba(16, 185, 129, 0.12); border-color: rgba(16,185,129,0.2); }
.status.warn { color: #92400e; background: rgba(245, 158, 11, 0.15); border-color: rgba(245,158,11,0.25); }
.meta { margin-top: 8px; font-weight: 800; color: #111827; opacity: 0.9; display: flex; gap: 8px; }
.actions { margin-top: 10px; }
</style>
