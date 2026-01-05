<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    
    <!-- HERO SECTION -->
    <section id="home" class="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img :src="heroImage" alt="Hero" class="w-full h-full object-cover" />
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div class="max-w-3xl">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium car<br />rental
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl">
            Experience luxury and comfort with our premium fleet. Quality vehicles, exceptional service.
          </p>

          <!-- SEARCH CARD -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label class="block text-xs font-bold text-gray-600 mb-2">LOCATION</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2">📍</span>
                  <div class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black text-sm"> Royal Tajur Bogor</div>
                  
                </div>
              </div>

              <!-- <div>
                <label class="block text-xs font-bold text-gray-600 mb-2">PICKUP DATE</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2">📅</span>
                  <input
                    v-model="bookingData.pickupDate"
                    type="date"
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div> -->

              <div>
                <label class="block text-xs font-bold text-gray-600 mb-2">Contact</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2">📞</span>
                  <input
                    v-model="bookingData.pickupTime"
                    type="text"
                    placeholder="087796720488"
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-600 mb-2">Cars</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2">🚗</span>
                  <input
                    v-model="bookingData.dropoffDate"
                    type="search"
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div>
            </div>

            <button
              @click="handleSearch"
              class="w-full py-4 bg-black text-[#FFFDE1] rounded-lg font-bold hover:bg-gray-900 transition flex items-center justify-center gap-2"
            >
              <span>Search Available Cars</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CAR BRANDS SECTION -->
    <section id="cars" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Car Brands</h2>
            <p class="text-gray-600">Explore our premium collection</p>
          </div>
          <button 
            @click="$router.push('/cars')"
            class="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            View all <span>→</span>
          </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="brand in brands"
            :key="brand.name"
            class="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
          >
            <img :src="brand.image" :alt="brand.name" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span class="text-white font-bold text-lg">{{ brand.name }}</span>
              <button 
                @click="$router.push('/cars')"
                class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center transition hover:bg-[#FFFDE1]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRENDING CARS SECTION -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Trending Cars</h2>
            <p class="text-gray-600">Most popular vehicles</p>
          </div>
          <button 
            @click="$router.push('/cars')"
            class="hidden sm:flex items-center gap-2 px-6 py-2 bg-black text-[#FFFDE1] rounded-lg hover:bg-gray-900 transition font-bold"
          >
            View all <span>→</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="car in trendingCars"
            :key="car.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
          >
            <div class="p-5">
              <h3 class="font-bold text-gray-900 text-lg">{{ car.name }}</h3>
              <p class="text-sm text-gray-500 mt-1">Rp {{ car.price.toLocaleString('id-ID') }}/day</p>
            </div>
            <div class="aspect-video overflow-hidden">
              <img :src="car.image" :alt="car.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div class="p-5 flex items-center justify-between">
              <button 
                @click="$router.push(`/cars/${car.id}`)"
                class="px-5 py-2 bg-black text-[#FFFDE1] rounded-lg font-bold hover:bg-gray-900 transition text-sm"
              >
                Book Now
              </button>
              <button 
                @click="$router.push(`/cars/${car.id}`)"
                class="text-sm font-bold text-gray-900 hover:text-black transition flex items-center gap-1"
              >
                Details <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-gray-50 rounded-2xl p-6 border border-gray-100"
          >
            <div class="text-3xl mb-4">{{ feature.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMO SECTION -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div class="absolute inset-0 opacity-20">
            <img :src="promoImage" alt="Promo" class="w-full h-full object-cover" />
          </div>
          <div class="relative px-8 py-16 sm:px-16 sm:py-20 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div class="max-w-xl">
              <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Special Tesla Offer</h2>
              <p class="text-gray-300 mb-6">Limited time discount on premium electric vehicles</p>
              <button 
                @click="contactSupport"
                class="px-8 py-3 bg-[#FFFDE1] text-black rounded-lg font-bold hover:bg-white transition inline-flex items-center gap-2"
              >
                Book Now <span>→</span>
              </button>
            </div>
            <div class="bg-[#FFFDE1] rounded-2xl px-12 py-10 text-center shadow-2xl">
              <div class="text-6xl font-black text-black">50%</div>
              <div class="text-sm font-bold text-gray-700 mt-2">OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer id="contact" class="border-t border-gray-200 bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span class="text-[#FFFDE1] font-bold text-xl">B</span>
              </div>
              <span class="font-bold text-gray-900">Bogor Mas Trans</span>
            </div>
            <p class="text-sm text-gray-600">Premium rental service for trusted journeys</p>
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
              <li>24/7 Chat Support</li>
              <li>Insurance Included</li>
              <li>Best Price Guarantee</li>
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
          © {{ year }} Bogor Mas Trans. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../layouts/Navbar.vue'
import { openWhatsAppBooking } from '../services/whatsapp'

const router = useRouter()
const ADMIN_WA = '6287796720488'

const bookingData = ref({
  pickupLocation: '',
  pickupDate: '',
  pickupTime: '',
  dropoffDate: ''
})

const year = new Date().getFullYear()


const heroImage = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=70'
const promoImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=70'

const brands = [
  { name: 'Mercedes-Benz', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=70' },
  { name: 'Audi', image: '' },
  { name: 'BMW', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=70' },
  { name: 'Porsche', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70' }
]

const trendingCars = [
  { id: 1, name: 'BMW i4', price: 960000, image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=70' },
  { id: 2, name: 'Audi A7', price: 850000, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=70' },
  { id: 3, name: 'Mercedes-Benz GLE', price: 1050000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=70' },
  { id: 4, name: 'Porsche 911', price: 1890000, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70' }
]

const features = [
  { icon: '🛡️', title: 'Premium Quality', desc: 'Certified vehicles' },
  { icon: '⭐', title: 'Best Price', desc: 'Competitive rates' },
  { icon: '🚗', title: 'Wide Selection', desc: 'Various options' },
  { icon: '📞', title: '24/7 Support', desc: 'Always available' }
]

function handleSearch() {
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: '-',
    dailyRate: 0,
    pickupDate: bookingData.value.pickupDate,
    pickupTime: bookingData.value.pickupTime,
    dropoffDate: bookingData.value.dropoffDate,
    dropoffTime: '',
    pickupLocation: bookingData.value.pickupLocation,
    customerName: ''
  })
}

function contactSupport() {
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: '-',
    dailyRate: 0,
    pickupDate: bookingData.value.pickupDate,
    pickupTime: bookingData.value.pickupTime,
    dropoffDate: bookingData.value.dropoffDate,
    dropoffTime: '',
    pickupLocation: bookingData.value.pickupLocation,
    customerName: ''
  })
}

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>