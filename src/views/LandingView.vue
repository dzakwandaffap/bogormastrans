<template>
  <div class="min-h-screen bg-white">
    <Navbar @book="contactSupport" />

    <!-- HERO -->
    <section
      id="home"
      class="pt-16 lg:pt-[4rem] min-h-screen flex items-center relative overflow-hidden"
      :style="{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div class="absolute inset-0 bg-slate-900/65"></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-900/50 to-black/70"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div class="max-w-3xl">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
            Rental Mobil Murah & Terpercaya Di Bogor
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl">
            <b>Trusted Car For Trusted Journeys.</b>
          </p>

          <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <a
                href="https://maps.app.goo.gl/nuDQo6er6w5PRZP86"
                target="_blank"
                rel="noopener noreferrer"
                class="block"
              >
                <label class="block text-xs font-bold text-gray-600 mb-2">LOCATION</label>
                <div class="relative">
                  <i
                    class="fa-solid fa-location-dot absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 text-lg"
                    style="color: red"
                  ></i>
                  <div
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white"
                  >
                    Royal Tajur Bogor
                  </div>
                </div>
              </a>

              <a :href="whatsAppUrl" target="_blank" rel="noopener noreferrer" class="block">
                <label class="block text-xs font-bold text-gray-600 mb-2">CONTACT</label>
                <div class="relative">
                  <i
                    class="fa-brands fa-whatsapp absolute left-3 top-1/2 -translate-y-1/2 text-green-600 text-lg"
                  ></i>
                  <div
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white"
                  >
                    087796720488
                  </div>
                </div>
              </a>

              <button type="button" @click="scrollTo('cars')" class="text-left w-full">
                <label class="block text-xs font-bold text-gray-600 mb-2">CARS</label>
                <div class="relative">
                  <i
                    class="fa-solid fa-car absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 text-lg"
                  ></i>
                  <div
                    class="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white"
                  >
                    Pilihan Armada
                  </div>
                </div>
              </button>
            </div>

            <button
              type="button"
              class="w-full mt-2 rounded-xl bg-black text-[#FFFDE1] py-3 font-bold hover:bg-gray-900 transition"
              @click="contactSupport"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="py-20 bg-white">
      <div class="mb-12 bg-white">
        <div
          class="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 md:px-26 py-12 gap-24"
        >
          <div class="w-full md:w-[45%] relative flex justify-center items-end">
            <div
              class="absolute bottom-0 w-full h-[40%] bg-[#1e4da1] rounded-[50%_50%_0_0] -z-10"
            ></div>
            <img
              :src="bannerr"
              alt="Armada Bogor Mas Trans"
              class="w-full max-w-[700px] h-auto object-contain relative z-10 scale-110 shadow-xl"
            />
          </div>
          <div class="w-full md:w-[40%] text-left">
            <h2 class="mb-6 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Layanan Transportasi Terpercaya di Bogor
            </h2>
            <p class="text-slate-600 leading-relaxed text-base md:text-sm">
              Berdiri sejak tahun 2025, Bogor Mas Trans hadir sebagai solusi transportasi terdepan
              di wilayah Bogor dan sekitarnya. Kami berkomitmen menyediakan layanan rental mobil
              yang mengutamakan keamanan, kenyamanan, dan profesionalisme.
            </p>
            <p class="text-slate-600 leading-relaxed text-base md:text-sm mt-4">
              Dikelola oleh tenaga profesional dengan armada terbaru yang terawat secara berkala,
              kami siap melayani berbagai kebutuhan transportasi Anda.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
          >
            <div class="text-3xl mb-4">
              <i :class="[feature.icon, feature.iconClass || 'text-slate-800']"></i>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CARS -->
    <section id="cars" class="py-16 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900">Pilihan Armada</h2>
          <p class="text-slate-600 mt-2">Pilih kendaraan dan tipe layanan sesuai kebutuhan</p>
        </div>

        <div class="armada-grid">
          <article v-for="car in filteredArmada" :key="car.id" class="armada-card">
            <div class="card-photo">
              <img :src="car.image" :alt="car.name" class="card-photo-img" loading="lazy" />
            </div>
            <div class="p-5">
              <h3 class="text-lg font-extrabold text-slate-800 text-center">{{ car.name }}</h3>

              <div class="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  @click="setService(car.id, 'driver')"
                  :class="[
                    'border rounded-lg text-sm py-2 font-semibold transition flex items-center justify-center gap-2',
                    serviceType[car.id] === 'driver'
                      ? 'border-slate-900 text-slate-900 bg-slate-100'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50',
                  ]"
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Driver</span>
                </button>

                <button
                  type="button"
                  @click="setService(car.id, 'nodriver')"
                  :class="[
                    'border rounded-lg text-sm py-2 font-semibold transition flex items-center justify-center gap-2',
                    serviceType[car.id] === 'nodriver'
                      ? 'border-slate-900 text-slate-900 bg-slate-100'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50',
                  ]"
                >
                  <i class="fa-solid fa-user-slash"></i>
                  <span>No Driver</span>
                </button>
              </div>

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

    <!-- REVIEWS -->
    <section id="reviews" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-slate-900">Ulasan Pelanggan</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- FORM -->
          <div class="lg:col-span-1">
            <div
              class="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-24 shadow-sm"
            >
              <h3 class="font-bold text-lg mb-4 text-slate-800">Tulis Ulasan</h3>

              <div
                v-if="reviewError"
                class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {{ reviewError }}
              </div>

              <form @submit.prevent="submitReview" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-slate-600 mb-1 tracking-wider"
                    >NAMA ANDA</label
                  >
                  <input
                    v-model.trim="newReview.name"
                    type="text"
                    class="w-full p-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-slate-400 outline-none"
                    placeholder="Contoh: Budi Santoso"
                    required
                    maxlength="60"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-600 mb-1 tracking-wider"
                    >RATING</label
                  >

                  <!-- RATING DROPDOWN WITH FONTAWESOME STARS -->
                  <div class="relative">
                    <button
                      type="button"
                      class="w-full p-3 rounded-lg border border-slate-200 bg-white text-left flex items-center justify-between"
                      @click.stop="ratingOpen = !ratingOpen"
                    >
                      <div class="flex items-center gap-1">
                        <div class="flex items-center gap-1 text-yellow-400">
                          <i v-for="n in newReview.rating" :key="n" class="fa-solid fa-star"></i>
                        </div>
                        <span class="ml-2 text-slate-600 text-sm font-semibold">
                          {{ ratingLabel(newReview.rating) }}
                        </span>
                      </div>
                      <i class="fa-solid fa-chevron-down text-slate-400"></i>
                    </button>

                    <div
                      v-if="ratingOpen"
                      class="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden"
                    >
                      <button
                        v-for="n in 5"
                        :key="n"
                        type="button"
                        class="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50"
                        @click="setRating(n)"
                      >
                        <div class="flex items-center gap-1 text-yellow-400 min-w-[110px]">
                          <i v-for="i in n" :key="i" class="fa-solid fa-star"></i>
                        </div>
                        <span class="text-sm text-slate-700 font-semibold">{{
                          ratingLabel(n)
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-600 mb-1 tracking-wider"
                    >KOMENTAR</label
                  >
                  <textarea
                    v-model.trim="newReview.comment"
                    rows="4"
                    class="w-full p-3 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-slate-400 outline-none"
                    placeholder="Ceritakan pengalaman perjalanan Anda..."
                    required
                    maxlength="300"
                  ></textarea>
                  <div class="mt-1 text-[11px] text-slate-500 font-semibold text-right">
                    {{ newReview.comment.length }}/300
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="reviewLoading"
                  class="w-full bg-slate-800 text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                  <span>{{ reviewLoading ? 'Mengirim...' : 'Kirim Ulasan' }}</span>
                </button>
              </form>
            </div>
          </div>

          <!-- SLIDER -->
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-bold text-slate-600">
                <span v-if="reviewsLoading">Memuat ulasan...</span>
                <span v-else>Total: {{ sortedReviews.length }} ulasan</span>
              </div>

              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50 grid place-items-center"
                  @click="prevReview"
                  aria-label="Prev"
                >
                  ‹
                </button>
                <button
                  type="button"
                  class="h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50 grid place-items-center"
                  @click="nextReview"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>

            <div
              class="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              @mouseenter="pauseSlider"
              @mouseleave="resumeSlider"
              @touchstart.passive="onTouchStart"
              @touchend.passive="onTouchEnd"
            >
              <div
                class="h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              ></div>

              <div class="relative p-6 sm:p-8 min-h-[220px]">
                <div v-if="reviewsLoading" class="text-slate-500 font-semibold">Loading...</div>

                <div v-else-if="sortedReviews.length === 0" class="text-slate-400 italic">
                  Belum ada ulasan. Jadilah yang pertama memberikan ulasan!
                </div>

                <transition name="fade" mode="out-in">
                  <div v-if="sortedReviews.length" :key="activeReviewKey" class="space-y-4">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <div
                          class="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-black"
                        >
                          {{ activeReview.name?.charAt(0)?.toUpperCase() || '?' }}
                        </div>
                        <div>
                          <div class="font-extrabold text-slate-900 leading-none mb-1">
                            {{ activeReview.name }}
                          </div>
                          <div class="flex items-center gap-1 text-yellow-400 text-[12px]">
                            <i
                              v-for="n in Number(activeReview.rating || 0)"
                              :key="n"
                              class="fa-solid fa-star"
                            ></i>
                            <span class="ml-2 text-slate-500 text-xs font-bold">
                              {{ activeReview.rating }}/5
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        class="text-[11px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full"
                      >
                        {{ formatDate(activeReview.created_at) }}
                      </div>
                    </div>

                    <p
                      class="text-slate-700 text-sm leading-relaxed italic border-l-2 border-slate-100 pl-4"
                    >
                      “{{ activeReview.comment }}”
                    </p>

                    <div
                      class="flex items-center justify-between text-xs text-slate-500 font-semibold"
                    >
                      <div>{{ activeIndex + 1 }} / {{ sortedReviews.length }}</div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <div
              v-if="reviewsError"
              class="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {{ reviewsError }}
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
              <div class="w-36 h-36 flex items-center justify-center">
                <img :src="logo" alt="Bogor Mas Trans" class="max-h-28 object-contain" />
              </div>
            </div>
            <b><p class="text-sm text-gray-600">Trusted Car For Trusted Journey</p></b>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 mb-4">Explore</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>
                <button @click="scrollTo('home')" class="hover:text-black transition">Home</button>
              </li>
              <li>
                <button @click="scrollTo('cars')" class="hover:text-black transition">Cars</button>
              </li>
              <li>
                <button @click="scrollTo('about')" class="hover:text-black transition">
                  About
                </button>
              </li>
              <li>
                <button
                  @click="scrollTo('reviews')"
                  class="hover:text-black transition font-bold text-slate-800"
                >
                  Reviews
                </button>
              </li>
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
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import Navbar from '../layouts/Navbar.vue'
import { openWhatsAppBooking } from '../services/whatsapp'
import { ReviewAPI } from '../services/review'

// assets
import bannerr from '@/assets/cars/bannerr.png'
import avanza2025 from '@/assets/cars/avanza2025.png'
import hiacecomuter from '@/assets/cars/hiacecomuter.png'
import hiacepremio from '@/assets/cars/hiacepremio.png'
import inovareborn from '@/assets/cars/inovareborn.png'
import xpander2025 from '@/assets/cars/xpander2025.png'
import heroBg from '@/assets/cars/background.jpeg'
import logo from '@/assets/logo.png'

const ADMIN_WA = '6287796720488'
const year = new Date().getFullYear()
const whatsAppUrl = computed(() => `https://wa.me/${ADMIN_WA}`)

const bookingData = ref({ contact: '', query: '' })

/** ARMADA */
const armadaCars = [
  { id: 1, name: 'Avanza 2025', image: avanza2025 },
  { id: 2, name: 'Hiace ComMuter', image: hiacecomuter },
  { id: 3, name: 'Hiace Premio', image: hiacepremio },
  { id: 4, name: 'Innova Reborn', image: inovareborn },
  { id: 5, name: 'Xpander 2025', image: xpander2025 },
]

const serviceType = reactive({})

const filteredArmada = computed(() => {
  const q = (bookingData.value.query || '').trim().toLowerCase()
  if (!q) return armadaCars
  return armadaCars.filter((c) => c.name.toLowerCase().includes(q))
})

/** FEATURES */
const features = [
  { icon: 'fa-solid fa-user', title: 'Driver', desc: 'Tersedia pilihan dengan atau tanpa driver' },
  { icon: 'fa-solid fa-tags', title: 'Best Price', desc: 'Harga kompetitif' },
  { icon: 'fa-solid fa-car', title: 'Wide Selection', desc: 'Armada lengkap & terawat' },
  { icon: 'fa-solid fa-clock-rotate-left', title: '24/7 Service', desc: 'Booking fleksibel' },
  {
    icon: 'fa-solid fa-star',
    title: 'Top Rated',
    desc: 'Ulasan pelanggan dengan rating tinggi',
    iconClass: 'text-yellow-400',
  },
]

/** REVIEWS (API) */
const reviews = ref([])
const reviewsLoading = ref(false)
const reviewsError = ref('')

const reviewLoading = ref(false)
const reviewError = ref('')

const newReview = reactive({ name: '', rating: 5, comment: '' })

/** RATING DROPDOWN */
const ratingOpen = ref(false)

function setRating(n) {
  newReview.rating = n
  ratingOpen.value = false
}

function ratingLabel(n) {
  switch (Number(n)) {
    case 5:
      return ''
    case 4:
      return ''
    case 3:
      return ''
    case 2:
      return ''
    case 1:
      return ''
    default:
      return ''
  }
}

// close dropdown when clicking outside
function onDocClick() {
  if (ratingOpen.value) ratingOpen.value = false
}

/** sort rating desc, then newest */
const sortedReviews = computed(() => {
  const list = Array.isArray(reviews.value) ? [...reviews.value] : []
  return list.sort((a, b) => {
    const ra = Number(a.rating || 0)
    const rb = Number(b.rating || 0)
    if (rb !== ra) return rb - ra

    const da = a.created_at ? new Date(a.created_at).getTime() : 0
    const db = b.created_at ? new Date(b.created_at).getTime() : 0
    return db - da
  })
})

async function fetchReviews() {
  reviewsLoading.value = true
  reviewsError.value = ''
  try {
    const res = await ReviewAPI.list()
    let payload = res.data

    // wrapper { data: [...] }
    if (payload && typeof payload === 'object' && Array.isArray(payload.data)) {
      payload = payload.data
    }

    // pagination { data: { data: [...] } }
    if (
      payload &&
      typeof payload === 'object' &&
      payload.data &&
      Array.isArray(payload.data.data)
    ) {
      payload = payload.data.data
    }

    if (!Array.isArray(payload)) throw new Error('Response reviews harus array.')
    reviews.value = payload
    activeIndex.value = 0
  } catch (e) {
    console.error(e)
    reviewsError.value = 'Gagal memuat ulasan. Pastikan API /api/reviews berjalan dan CORS benar.'
  } finally {
    reviewsLoading.value = false
  }
}

async function submitReview() {
  reviewError.value = ''
  reviewLoading.value = true
  ratingOpen.value = false

  const name = (newReview.name || '').trim()
  const comment = (newReview.comment || '').trim()
  const rating = Number(newReview.rating || 0)

  if (name.length < 2) {
    reviewError.value = 'Nama minimal 2 karakter.'
    reviewLoading.value = false
    return
  }
  if (comment.length < 5) {
    reviewError.value = 'Komentar minimal 5 karakter.'
    reviewLoading.value = false
    return
  }
  if (rating < 1 || rating > 5) {
    reviewError.value = 'Rating harus 1 sampai 5.'
    reviewLoading.value = false
    return
  }

  try {
    await ReviewAPI.create({ name, rating, comment })
    await fetchReviews()

    newReview.name = ''
    newReview.comment = ''
    newReview.rating = 5

    alert('Terima kasih atas ulasannya!')
  } catch (e) {
    console.error(e)
    reviewError.value =
      e?.response?.data?.message || 'Gagal mengirim ulasan. Cek API, validasi backend, dan CORS.'
  } finally {
    reviewLoading.value = false
  }
}

/** Review Slider */
const SLIDE_MS = 5000
const activeIndex = ref(0)
const isPaused = ref(false)
let timer = null

const activeReview = computed(() => sortedReviews.value[activeIndex.value] || {})
const activeReviewKey = computed(
  () => activeReview.value?.id ?? `${activeIndex.value}-${activeReview.value?.created_at ?? 'x'}`,
)

function nextReview() {
  if (!sortedReviews.value.length) return
  activeIndex.value = (activeIndex.value + 1) % sortedReviews.value.length
}

function prevReview() {
  if (!sortedReviews.value.length) return
  activeIndex.value =
    (activeIndex.value - 1 + sortedReviews.value.length) % sortedReviews.value.length
}

function startSlider() {
  stopSlider()
  timer = setInterval(() => {
    if (!isPaused.value && sortedReviews.value.length > 1) nextReview()
  }, SLIDE_MS)
}

function stopSlider() {
  if (timer) clearInterval(timer)
  timer = null
}

function pauseSlider() {
  isPaused.value = true
}
function resumeSlider() {
  isPaused.value = false
}

/** Touch swipe */
const touchStartX = ref(0)
const touchEndX = ref(0)

function onTouchStart(e) {
  touchStartX.value = e.changedTouches?.[0]?.clientX || 0
}
function onTouchEnd(e) {
  touchEndX.value = e.changedTouches?.[0]?.clientX || 0
  const dx = touchEndX.value - touchStartX.value
  const threshold = 40
  if (Math.abs(dx) < threshold) return
  if (dx < 0) nextReview()
  else prevReview()
}

/** Booking */
function setService(carId, type) {
  serviceType[carId] = type
}

function bookCar(car) {
  const type = serviceType[car.id] || null
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: car.name,
    serviceType: type,
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
    customerName: '',
  })
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function formatDate(iso) {
  if (!iso) return '-'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '-'
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

onMounted(async () => {
  document.addEventListener('click', onDocClick)
  await fetchReviews()
  startSlider()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  stopSlider()
})
</script>

<style scoped>
.armada-grid {
  display: grid;
  justify-content: center;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .armada-grid {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}

@media (min-width: 1280px) {
  .armada-grid {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }
}

.armada-card {
  background: white;
  border: 1px solid rgb(226 232 240);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition: all 150ms ease;
}

.armada-card:hover {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
}

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

/* simple transition for slider */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 220ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
