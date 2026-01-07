<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 shadow-md backdrop-blur border-b border-slate-200' : 'bg-white/70 backdrop-blur'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Brand -->
        <button
          type="button"
          class="flex items-center gap-3 text-left"
          @click="scrollTo('home')"
          aria-label="Go to Home"
        >
          <div class="h-10 w-10 rounded-xl bg-white ring-1 ring-slate-200 grid place-items-center overflow-hidden">
            <img
              :src="logoSrc"
              alt="Bogor Mas Trans"
              class="h-full w-full object-contain p-1"
              loading="lazy"
              @error="onLogoError"
            />
          </div>

          <div class="leading-tight">
            <p class="text-[15px] sm:text-base font-extrabold tracking-tight text-slate-900">
              Bogor Mas Trans
            </p>
            <p class="hidden sm:block text-xs font-semibold text-slate-500">
              rental mobil bogor terpercaya 
            </p>
          </div>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-8">
          <button
            v-for="link in links"
            :key="link.id"
            type="button"
            @click="scrollTo(link.id)"
            class="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            {{ link.label }}
          </button>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <button
            type="button"
            @click="emit('book')"
            class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-slate-950 transition"
          >
            Book Now
          </button>
        </div>

        <!-- Mobile actions -->
        <div class="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            @click="emit('book')"
            class="rounded-xl bg-slate-900 px-3 py-2 text-sm font-extrabold text-white hover:bg-slate-950 transition"
          >
            Book
          </button>

          <button
            type="button"
            @click="toggleMobileMenu"
            class="grid h-10 w-10 place-items-center rounded-xl ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile drawer -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[60] lg:hidden">
        <div class="absolute inset-0 bg-black/45" @click="closeMobileMenu"></div>

        <transition
          enter-active-class="transform transition duration-300 ease-out"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <aside
            v-if="mobileMenuOpen"
            class="absolute left-0 top-0 h-full w-[82%] max-w-xs bg-white shadow-2xl"
          >
            <div class="p-5 border-b border-slate-200 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-white ring-1 ring-slate-200 grid place-items-center overflow-hidden">
                  <img :src="logoSrc" alt="Bogor Mas Trans" class="h-full w-full object-contain p-1" @error="onLogoError" />
                </div>
                <div class="leading-tight">
                  <p class="text-sm font-extrabold text-slate-900">Bogor Mas Trans</p>
                  <p class="text-xs font-semibold text-slate-500">Premium rental</p>
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
import { onBeforeUnmount, onMounted, ref } from 'vue'
import logoPng from '@/assets/bogormastrans.webp' 

const emit = defineEmits(['book'])

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { id: 'home', label: 'Home' },
  { id: 'cars', label: 'Cars' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

const logoSrc = ref(logoPng)

function onLogoError() {
  // fallback kalau logo bermasalah
  logoSrc.value =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <rect width="40" height="40" rx="12" fill="#0f172a"/>
      <text x="20" y="26" text-anchor="middle" font-size="18" fill="white" font-family="Arial" font-weight="700">B</text>
    </svg>`)
}

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
