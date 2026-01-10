<!-- src/views/HomeView.vue -->
<template>
  <div class="min-h-screen bg-white">
    <Navbar @book="contactSupport" />

    <!-- HERO SECTION -->
 <section
  id="home"
  class="pt-16 lg:pt-[4rem] min-h-screen flex items-center relative overflow-hidden"
  :style="{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }"
>

  <!-- Overlay (biar teks/card kebaca) -->
  <div class="absolute inset-0 bg-slate-900/65"></div>

    <!-- Optional: overlay gradient agar lebih premium -->
  <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-900/50 to-black/70"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div class="max-w-3xl">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
            Rental Mobil Murah & Terpercaya Di Bogor 
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl">
           <b> Trusted Car For Trusted Journeys.</b>
          </p>

          <!-- SEARCH CARD -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            <!-- LOCATION -->
            <a
              href="https://maps.app.goo.gl/nuDQo6er6w5PRZP86"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <label class="block text-xs font-bold text-gray-600 mb-2">LOCATION</label>
              <div class="relative">
                <i
                  class="fa-solid fa-location-dot absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 text-lg" style="color: red;"
                  aria-hidden="true"
                ></i>

                <div class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white">
                  Royal Tajur Bogor
                </div>
              </div>
            </a>

            <!-- CONTACT -->
            <a
              :href="whatsAppUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <label class="block text-xs font-bold text-gray-600 mb-2">CONTACT</label>
              <div class="relative">
                <i
                  class="fa-brands fa-whatsapp absolute left-3 top-1/2 -translate-y-1/2 text-green-600 text-lg"
                  aria-hidden="true"
                ></i>

                <div class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white">
                  087796720488
                </div>
              </div>
            </a>

            <!-- CARS -->
            <button type="button" @click="scrollTo('cars')" class="text-left w-full">
              <label class="block text-xs font-bold text-gray-600 mb-2">CARS</label>
              <div class="relative">
                <i
                  class="fa-solid fa-car absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 text-lg" style="color: black;"
                  aria-hidden="true"
                ></i>

                <div class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white">
                  Pilihan Armada
                </div>
              </div>
            </button>

          </div>
        </div>
        </div>
      </div>
    </section>
    


    

 <!-- FEATURES -->
    <section id="about" class="py-20 bg-white">
    <!-- GAMBAR BESAR DI ATAS -->
    <div class="mb-12 bg-white">
  <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-26 py-12 gap-24">
    
    <!-- IMAGE -->
    <div class="w-full md:w-[45%] relative flex justify-center items-end">
      <div class="absolute bottom-0 w-full h-[40%] bg-[#1e4da1] rounded-[50%_50%_0_0] -z-10"></div>
      
      <img
        :src="bannerr"
        alt="Armada Bogor Mas Trans"
        class="w-full max-w-[700px] h-auto object-contain relative z-10 scale-110 shadow-xl"
      />
    </div>

    <!-- TEXT -->
    <div class="w-full md:w-[40%] text-left">
      <h2 class="mb-6 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Layanan Transportasi Terpercaya di Bogor
      </h2>
      
      <p class="text-slate-600 leading-relaxed text-base md:text-sm">
        Berdiri sejak tahun 2025, Bogor Mas Trans hadir sebagai solusi transportasi terdepan di wilayah Bogor dan sekitarnya. Kami memahami bahwa mobilitas yang efisien adalah kunci produktivitas, itulah sebabnya kami berkomitmen menyediakan layanan rental mobil yang mengutamakan keamanan, kenyamanan, dan profesionalisme.

      </p>
      <p class="text-slate-600 leading-relaxed text-base md:text-sm">
      Kami dikelola oleh tenaga profesional yang berdedikasi untuk memberikan pengalaman berkendara terbaik. Dengan armada kendaraan terbaru yang terawat secara berkala, kami siap melayani berbagai kebutuhan transportasi Anda, mulai dari perjalanan bisnis, sewa harian korporat, hingga antar-jemput operasional dengan standar pelayanan prima.

     </p>
    </div>

  </div>
</div>


   <section id="about" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
      >
        <div class="text-3xl mb-4 text-slate-800">
          <i :class="feature.icon"></i>
        </div>
        <h3 class="font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
        <p class="text-sm text-gray-600">{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</section>
    </section>

    <!-- PILIHAN ARMADA -->
    <section id="cars" class="py-16 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900">Pilihan Armada</h2>
          <p class="text-slate-600 mt-2">Pilih kendaraan dan tipe layanan sesuai kebutuhan</p>
        </div>

        <!-- GRID CENTER & AUTO -->
        <div class="armada-grid">
          <article
            v-for="car in filteredArmada"
            :key="car.id"
            class="armada-card"
          >
            <!-- FOTO: TIDAK TERPOTONG -->
            <div class="card-photo">
              <img
                :src="car.image"
                :alt="car.name"
                class="card-photo-img"
                loading="lazy"
              />
            </div>

            <div class="p-5">
              <h3 class="text-lg font-extrabold text-slate-800 text-center">
                {{ car.name }}
              </h3>

              <div class="mt-4 grid grid-cols-2 gap-3">

                <!-- DRIVER -->
                <button
                  type="button"
                  @click="setService(car.id, 'driver')"
                  :class="[
                    'border rounded-lg text-sm py-2 font-semibold transition flex items-center justify-center gap-2',
                    serviceType[car.id] === 'driver'
                      ? 'border-slate-900 text-slate-900 bg-slate-100'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  ]"
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Driver</span>
                </button>

                <!-- NO DRIVER -->
                <button
                  type="button"
                  @click="setService(car.id, 'nodriver')"
                  :class="[
                    'border rounded-lg text-sm py-2 font-semibold transition flex items-center justify-center gap-2',
                    serviceType[car.id] === 'nodriver'
                      ? 'border-slate-900 text-slate-900 bg-slate-100'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  ]"
                >
                  <i class="fa-solid fa-user-slash"></i>
                  <span>No Driver</span>
                </button>
              </div>


              <!-- TOMBOL DI BAWAH CARD -->
              <button
                type="button"
                @click="bookCar(car)"
                class="mt-5 w-full bg-slate-700 text-white py-3 rounded-lg font-bold text-base hover:bg-[#0F2E61] transition"
              >
                Book Now
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

  

    <!-- FOOTER -->
    <footer id="contact" class="border-t border-gray-200 bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-36 h-36 flex items-center justify-center">
                <img src="@/assets/logo.png" alt="Bogor Mas Trans">
              </div>
            </div>
            <b><p class="text-sm text-gray-600">Trusted Car For Trusted Journey</p></b>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-4">Explore</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><button @click="scrollTo('home')" class="hover:text-black transition">Home</button></li>
              <li><button @click="scrollTo('cars')" class="hover:text-black transition">Cars</button></li>
              <li><button @click="scrollTo('about')" class="hover:text-black transition">About</button></li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-4">Support</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>Whatsapp Chat Support</li>
              <li>Driver Available</li>
              <li>Best Price For The Quality</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-4">Quick Booking</h3>
            <p class="text-sm text-gray-600 mb-4">Contact us via WhatsApp</p>
            <button
              @click="contactSupport"
              class="w-full px-6 py-3 bg-black text-[#FFFDE1] rounded-lg font-bold hover:bg-gray-900 transition"
            >
              Chat WhatsApp
            </button>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {{ year }} BogorMasTrans. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../layouts/Navbar.vue'
import { openWhatsAppBooking } from '../services/whatsapp'
import bannerr from '@/assets/cars/bannerr.png'
import avanza2025 from '@/assets/cars/avanza2025.png'
import hiacecomuter from '@/assets/cars/hiacecomuter.png'
import hiacepremio from '@/assets/cars/hiacepremio.png'
import inovareborn from '@/assets/cars/inovareborn.png'
import xpander2025 from '@/assets/cars/xpander2025.png'
import heroBg from '@/assets/cars/background.jpeg'

const router = useRouter()
const ADMIN_WA = '6287796720488'

const whatsAppUrl = computed(() => {
  // Bisa juga ditambah text awal:
  // return `https://wa.me/${phoneNumberWA}?text=${encodeURIComponent('Halo admin, saya mau booking.')}`
  return `https://wa.me/${ADMIN_WA}`
})

const bookingData = ref({
  contact: '',
  query: ''
})

const year = new Date().getFullYear()

const heroImage =
  'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=70'

/** ARMADA 4 MOBIL */
const armadaCars = [
  { id: 1, name: 'Avanza 2025', image: avanza2025 },
  { id: 2, name: 'Hiace ComMuter', image: hiacecomuter },
  { id: 3, name: 'Hiace Premio', image: hiacepremio },
  { id: 4, name: 'Innova Reborn', image: inovareborn },
   { id: 5, name: 'Xpander 2025', image: xpander2025 }
]

const serviceType = reactive({})

const filteredArmada = computed(() => {
  const q = (bookingData.value.query || '').trim().toLowerCase()
  if (!q) return armadaCars
  return armadaCars.filter((c) => c.name.toLowerCase().includes(q))
})

const features = [
  {
    icon: 'fa-solid fa-user',
    title: 'Driver',
    desc: 'Tersedia pilihan dengan atau tanpa driver'
  },
  {
    icon: 'fa-solid fa-tags',
    title: 'Best Price',
    desc: 'Harga kompetitif'
  },
  {
    icon: 'fa-solid fa-car',
    title: 'Wide Selection',
    desc: 'Armada lengkap & terawat'
  },
  {
    icon: 'fa-solid fa-clock-rotate-left',
    title: '24/7 Service',
    desc: 'Booking fleksibel'
  }
]

function setService(carId, type) {
  serviceType[carId] = type
}

function bookCar(car) {
  const type = serviceType[car.id] || null

  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: car.name,
    serviceType: type // 'driver', 'nodriver', atau null
  })
}


function handleSearch() {
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: bookingData.value.query || '-',
    dailyRate: 0,
    pickupDate: '',
    pickupTime: bookingData.value.contact || '',
    dropoffDate: '',
    dropoffTime: '',
    pickupLocation: 'Royal Tajur Bogor',
    customerName: ''
  })
}

function contactSupport() {
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: '-',
    dailyRate: 0,
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    pickupLocation: 'Royal Tajur Bogor',
    customerName: ''
  })
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
/* GRID CENTER + AUTO */
.armada-grid {
  display: grid;
  justify-content: center;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1400px;
  margin: 0 auto;
}

/* DESKTOP: kartu lebih lebar agar gambar tidak terdesak */
@media (min-width: 1024px) {
  .armada-grid {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}

/* LAYAR BESAR */
@media (min-width: 1280px) {
  .armada-grid {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }
}

/* CARD */
.armada-card {
  background: white;
  border: 1px solid rgb(226 232 240);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition: box-shadow 150ms ease;
}

.armada-card:hover {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
}

/* FOTO: TIDAK ADA HEIGHT TETAP, TIDAK TERPOTONG */
.card-photo {
  background: #fff;
  padding: 18px;
}

.card-photo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
</style>
