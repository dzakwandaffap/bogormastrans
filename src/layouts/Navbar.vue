<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-[9999] transition-all duration-300',
      'bg-white',
      scrolled ? 'shadow-md' : ''
    ]"
  >


    <!-- ===== DESKTOP: NAV BAR (DARK) ===== -->
    <div class="desktop-only bg-white-800">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Flex container utama -->
    <div class="flex h-14 items-center justify-between w-full">
      
      <!-- Logo + Tulisan di kiri -->
      <div class="flex items-center gap-2">
        <div class="h-12 w-12 grid place-items-center overflow-hidden">
          <img
            :src="logoSrc"
            alt="Bogor Mas Trans"
            class="h-full w-full object-contain p-0.5"
            loading="lazy"
            @error="onLogoError"
          />
        </div>
        <p class="text-lg font-extrabold tracking-tight text-blue-950 whitespace-nowrap">
          Bogor Mas Trans
        </p>
      </div>

      <!-- Navigasi di kanan -->
      <nav class="flex items-center gap-10">
        <button
          v-for="link in links"
          :key="link.id"
          type="button"
          @click="scrollTo(link.id)"
          class="text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
        >
          {{ link.label }}
        </button>
      </nav>

    </div>
  </div>
</div>

    <!-- ===== MOBILE: SINGLE BAR (WHITE) ===== -->
    <div class="mobile-only border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex h-16 items-center justify-between">
          <button
            type="button"
            class="flex items-center gap-3 text-left"
            @click="scrollTo('home')"
            aria-label="Go to Home"
          >
            <div class="h-12 w-12 grid place-items-center overflow-hidden">
              <img
                :src="logoSrc"
                alt="Bogor Mas Trans"
                class="h-full w-full object-contain p-0.5"
                loading="lazy"
                @error="onLogoError"
              />
            </div>

            <div class="leading-tight min-w-0">
              <p class="text-[16px] font-extrabold tracking-tight text-blue-950 whitespace-nowrap truncate">
                Bogor Mas Trans
              </p>
            </div>
          </button>

          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="emit('book')"
              class="rounded-xl bg-slate-900 px-3 py-2 text-sm font-extrabold text-white hover:bg-slate-950 transition"
            >
              Contact
            </button>

            <button
              type="button"
              @click="toggleMobileMenu"
              class="grid h-10 w-10 place-items-center rounded-xl ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition"
              :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
              aria-label="Toggle menu"
            >
              <svg
                v-if="!mobileMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Mobile drawer ===== -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[99999] mobile-only">
        <div class="absolute inset-0 bg-black/45" @click="closeMobileMenu"></div>

        <transition
          enter-active-class="transform transition duration-300 ease-out"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <aside v-if="mobileMenuOpen" class="absolute left-0 top-0 h-full w-[82%] max-w-xs bg-white shadow-2xl">
            <div class="p-5 border-b border-slate-200 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200 grid place-items-center overflow-hidden">
                  <img
                    :src="logoSrc"
                    alt="Bogor Mas Trans"
                    class="h-full w-full object-contain p-1"
                    @error="onLogoError"
                  />
                </div>
                <div class="leading-tight">
                  <p class="text-sm font-extrabold text-slate-900">Bogor Mas Trans</p>
                  <p class="text-xs font-semibold text-slate-500">Trusted Cars For Trusted Journeys</p>
                </div>
              </div>

              <button
                type="button"
                @click="closeMobileMenu"
                class="grid h-10 w-10 place-items-center rounded-xl ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <div class="p-5">
              <nav class="space-y-1">
                <button
                  v-for="link in links"
                  :key="link.id"
                  type="button"
                  class="w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                  @click="scrollToMobile(link.id)"
                >
                  {{ link.label }}
                </button>
              </nav>

              <button
                type="button"
                @click="handleBookMobile"
                class="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white hover:bg-slate-950 transition"
              >
                Book Now
              </button>

              <div class="mt-4 space-y-3">
                <a
                  :href="whatsAppUrl"
                  target="_blank"
                  rel="noopener"
                  class="block w-full text-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Chat WhatsApp
                </a>

                <a
                  :href="mapsUrl"
                  target="_blank"
                  rel="noopener"
                  class="block w-full text-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Open Maps
                </a>
              </div>

              <p class="mt-3 text-xs font-semibold text-slate-500">
                Chat admin via WhatsApp untuk cek ketersediaan.
              </p>
            </div>
          </aside>
        </transition>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, computed, ref } from 'vue'
import logoPng from '@/assets/logo.png'

const emit = defineEmits(['book'])

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'cars', label: 'Cars' },
  { id: 'contact', label: 'Contact' }
]

// Nomor tampilan (boleh pakai 08)
const phoneNumber = '087796720488'

// Untuk WhatsApp HARUS format internasional tanpa +, tanpa spasi
// 0877... => 62877...
const phoneNumberWA = '6287796720488'

// Link maps dari Anda
const mapsUrl = 'https://maps.app.goo.gl/nuDQo6er6w5PRZP86'
const locationText = 'Royal Tajur Bogor'

const logoSrc = ref(logoPng)

const whatsAppUrl = computed(() => {
  // Bisa juga ditambah text awal:
  // return `https://wa.me/${phoneNumberWA}?text=${encodeURIComponent('Halo admin, saya mau booking.')}`
  return `https://wa.me/${phoneNumberWA}`
})

function onLogoError() {
  logoSrc.value =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect width="40" height="40" rx="12" fill="#0f172a"/>
      <text x="20" y="26" text-anchor="middle" font-size="18" fill="white" font-family="Arial" font-weight="700">B</text>
    </svg>`)
}

/**
 * Icon contact (base64 Anda)
 */
const contactIconSrc =
  'data:image/webp;base64,UklGRoAEAABXRUJQVlA4IHQEAADQJgCdASoFAQUBPp1OoUylpKMiJLW4CLATiWlu4XHhG/N18PdhH+osjH4BiKHFDgJV3Ouf0/i1+nPYJ8oz13fuB7JH7ABtgIF2TsnZOydk7J2TsnZOydk7J2TsnZOxhFj/rBGQ/wNQlQ0YJgJASAkAuz130/VPkBN6VIF2TsnYtR1M0OFZu82vTQMxhi612AsDSjOd9XGGLNflxLg6O6sSFNvvFwGaq2S4lxLiWdv0avwI5BvRx0lmkdtpkZcEaR4kMES6mnVgo1u759Cps/3FTCoSkszGGMJzCUsmSXDNbKyXDqWxiQuo+i0GvRUy4jqYkxJdOawmKQSos4CGusyvzIyYkxJh5R+6JXl3d31qkp1yu7QsXEuJcS4P6EzVVpGMe43KokxJiTEmJMSYkxJiTEmJMSYkxJiTEmJMSXIAAP7+jIAAaZ7oYvRatYSvul0YIsdqrwupnPis4DdQz8y2gQ/F9Gf+uMtBJe46Z2h2O0bzWUxZXEnn9nBrDwPfET+6WvcMyqI4nHBaHBzh6n7OBuk3htxwgNNqJ9d5omPQ/v1GfbYwXyux09QkBSW9oM/YgK/G8Ibp1zT7tmgbDB102IDEQax/8s10T93ayiJIkKOB7pUbl/4mhfzjvHl+wrnR+ojUwns3euZTrHirfJFrktkbfYt+Keygb8RCXUKfykLl7Jba1IzhnXL7u4OU1yKDGMJ9xGe+FbSRN2Tg/CF0MgFUAFXeomtRWyZnhYL5lfT/UoBcHV2unELiu6rPv7Bp506ZsUH9O9dCIY526SmEEZ92D21SpSK4KCDwb62ESRx1g7d5jyxcHms2R5//l8lYP0anVM4SNGeDK7Oqus+FsUfInG5L5xC3aRQSMhPMIejwS/hruYCtOhjo31fzImaDhPRJPzPZRuMfGzBkhDX5DxRryW26Lm1YYUW22XqZq+h0rzpf744s+EmX5VghS6aTDkw4J31rozxR3OMirrwQwUFBLzlnSKW2krRln5i88r6NLaisyofMzNtPNpOtTQAqGnBS8WwW7otq+6IQ+P/e/fxC11cnTbOhmYK02o7tDKT/qo3L56i/2CKz7XspohlK0IrfWhdPujbBQSIQl8Db8zSnBXuY3AzjJyjWEhz15lEkmG/S+2pWDwEr5AIttQOz/CR5OxfwAAZ9aZn1Qekk+8/W06oY9KLOhq7fzwYor6ZDvB8mdUMDQH0UnR86tW5A8J0WidUeHUcsUy6NiNGRiq9ffVoUckdKhLjhv/Oq023YO5IHxfTMwMf2+Hs7hc9n0GVTiuFX+gsQpr1HJhbx1xU3w3FAmsAmcWzoyM+yeRilDqtqXeY/Mc7BsKQpyDeUADFAMOm4N7/jJp6HO/xloUtWEJa68ha81kzPVLuF4hmOEK0oG/N5XsWoojlZqrwNj8CbHyOVw03uYzGWClOmIwvuuq+slJ9syUt8vNhYBryTpzh7t/56eez2F8sDj+0Ko7lw8UQ04JHTRLXNH5HqV+TsW4ZVHSYzKvNZKHsFfEAAAAA='

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToMobile(id) {
  closeMobileMenu()
  setTimeout(() => scrollTo(id), 120)
}

function handleBookMobile() {
  closeMobileMenu()
  emit('book')
}

function handleScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.desktop-only { display: none; }
.mobile-only { display: block; }

@media (min-width: 1024px) {
  .desktop-only { display: block; }
  .mobile-only { display: none; }
}
</style>
