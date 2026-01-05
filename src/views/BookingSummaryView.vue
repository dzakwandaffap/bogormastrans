<template>
  <AppShell :backTo="{ name: 'car-detail', params: { id } }">
    <template #title>Booking Summary</template>
  </AppShell>

  <div v-if="!car" class="empty">Mobil tidak ditemukan.</div>

  <div v-else class="wrap">
    <div class="summary-card">
      <img class="img" :src="car.image" :alt="car.name" />

      <div class="card-body">
        <div class="toprow">
          <div>
            <div class="name">{{ car.name }}</div>
            <div class="sub">{{ car.type }} • {{ car.transmission }} • {{ car.seats }} Seats</div>
          </div>
          <div class="rate">
            <div class="rate-val">{{ formatIDR(car.dailyRate) }}</div>
            <div class="rate-sub">/day</div>
          </div>
        </div>

        <div class="itinerary">
          <div class="it-title">Trip Itinerary</div>

          <div class="it-row">
            <div class="dot green"></div>
            <div>
              <div class="it-label">PICK-UP</div>
              <div class="it-value">{{ pickup.location }}</div>
              <div class="it-sub">{{ pickup.date }} • {{ pickup.time }}</div>
            </div>
          </div>

          <div class="it-row">
            <div class="dot gold"></div>
            <div>
              <div class="it-label">DROP-OFF</div>
              <div class="it-value">{{ dropoff.location }}</div>
              <div class="it-sub">{{ dropoff.date }} • {{ dropoff.time }}</div>
            </div>
          </div>
        </div>

        <AppButton block @click="confirmBooking">Confirm Booking →</AppButton>

        <div class="pricebox">
          <div class="pb-row"><span>Car Rental (3 days)</span><b>{{ formatIDR(car.dailyRate * 3) }}</b></div>
          <div class="pb-row"><span>Driver Fee</span><b>{{ formatIDR(driverFee) }}</b></div>
          <div class="pb-row"><span>Insurance</span><b>{{ formatIDR(insurance) }}</b></div>
          <div class="pb-row disc"><span>Discount (Promo)</span><b>-{{ formatIDR(discount) }}</b></div>
          <div class="pb-total"><span>Total Price</span><b>{{ formatIDR(total) }}</b></div>
          <div class="pb-note">Includes taxes & fees</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import AppShell from "../layouts/AppShell.vue";
import AppButton from "../components/common/AppButton.vue";
import { cars } from "../data/cars";
import { openWhatsAppBooking } from "../services/whatsapp";

const route = useRoute();
const id = route.params.id;

const car = computed(() => cars.find((c) => c.id === id));

const pickup = ref({
  date: "Oct 24, 2025",
  time: "10:00 AM",
  location: "Soekarno–Hatta Int. Airport",
});
const dropoff = ref({
  date: "Oct 27, 2025",
  time: "10:00 AM",
  location: "Same as pick-up",
});

const driverFee = 1000000;
const insurance = 500000;
const discount = 500000;

const total = computed(() => {
  if (!car.value) return 0;
  return car.value.dailyRate * 3 + driverFee + insurance - discount;
});

function confirmBooking() {
  if (!car.value) return;

  openWhatsAppBooking({
    phoneInternational: "6281234567890", // ganti nomor WA admin
    carName: car.value.name,
    dailyRate: car.value.dailyRate,
    pickupDate: pickup.value.date,
    pickupTime: pickup.value.time,
    dropoffDate: dropoff.value.date,
    dropoffTime: dropoff.value.time,
    pickupLocation: pickup.value.location,
    customerName: "",
  });
}

function formatIDR(n) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(n);
}
</script>

<style scoped>
.wrap { padding: 16px; background: var(--bg); min-height: calc(100vh - 56px); }
.summary-card {
  background: #fff;
  border: 1px solid rgba(17,24,39,0.08);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 30px rgba(17,24,39,0.08);
}
.img { width: 100%; height: 220px; object-fit: cover; }
.card-body { padding: 12px; }
.toprow { display: flex; justify-content: space-between; gap: 10px; align-items: flex-start; }
.name { font-weight: 900; color: #111827; }
.sub { margin-top: 2px; font-weight: 800; opacity: 0.65; font-size: 12px; }
.rate { text-align: right; }
.rate-val { font-weight: 900; color: var(--gold-dark); }
.rate-sub { font-weight: 800; opacity: 0.6; font-size: 12px; }

.itinerary { margin-top: 12px; padding: 12px; border-radius: 16px; background: #fafafa; border: 1px solid rgba(17,24,39,0.08); }
.it-title { font-weight: 900; margin-bottom: 10px; color: #111827; }
.it-row { display: grid; grid-template-columns: 12px 1fr; gap: 10px; margin: 10px 0; }
.dot { width: 10px; height: 10px; border-radius: 999px; margin-top: 4px; }
.dot.green { background: #10b981; }
.dot.gold { background: var(--gold); }
.it-label { font-size: 11px; font-weight: 900; opacity: 0.6; }
.it-value { font-weight: 900; color: #111827; }
.it-sub { font-weight: 800; opacity: 0.65; font-size: 12px; margin-top: 2px; }

.pricebox { margin-top: 12px; border: 1px solid rgba(17,24,39,0.08); border-radius: 16px; padding: 12px; background: #fff; }
.pb-row { display: flex; justify-content: space-between; margin: 8px 0; font-weight: 800; opacity: 0.8; }
.pb-row.disc { color: #065f46; }
.pb-total { display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(17,24,39,0.08); font-weight: 900; color: #111827; }
.pb-note { margin-top: 6px; font-weight: 800; opacity: 0.6; font-size: 12px; }

.empty { padding: 16px; font-weight: 900; opacity: 0.7; }
</style>
