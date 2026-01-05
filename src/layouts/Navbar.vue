<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-white/70 backdrop-blur']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10flex items-center justify-center text-xl"><img src="https://drive.google.com/file/d/1D9JUSFxoV_T8X0CLtBtOU-4wMMNtxDhw/view" alt=""> </div>
          <div class="leading-tight">
            <p class="text-lg font-bold text-gray-900">Bogor Mas Trans</p>
            <p class="hidden sm:block text-xs text-gray-500">Premium rental service</p>
          </div>
        </div>

        <nav class="hidden lg:flex items-center gap-8">
          <button
            v-for="link in links"
            :key="link.id"
            type="button"
            @click="scrollTo(link.id)"
            class="text-gray-600 hover:text-black font-medium transition-colors"
          >
            {{ link.label }}
          </button>
        </nav>

        <div class="hidden lg:flex items-center gap-4">
          <button
            type="button"
            @click="emit('book')"
            class="px-4 py-2 bg-black text-[#FFFDE1] rounded-full text-sm font-semibold shadow-sm hover:bg-gray-900 transition"
          >
            Book Now
          </button>
        </div>

        <div class="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            @click="emit('book')"
            class="px-3 py-2 rounded-full bg-black text-[#FFFDE1] text-sm font-semibold hover:bg-gray-900 transition"
          >
            Book
          </button>
          <button
            type="button"
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 lg:hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeMobileMenu"></div>
        <transition
          enter-active-class="transform transition duration-300"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition duration-300"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <aside v-if="mobileMenuOpen" class="absolute top-0 left-0 h-full w-72 bg-white shadow-2xl p-6">
            <div class="flex items-center justify-between mb-10">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-black text-[#FFFDE1] rounded-xl flex items-center justify-center font-black text-xl">B</div>
                <div class="leading-tight">
                  <p class="text-base font-bold text-gray-900">Bogor Mas Trans</p>
                  <p class="text-xs text-gray-500">Premium rental</p>
                </div>
              </div>
              <button
                type="button"
                @click="closeMobileMenu"
                class="p-2 rounded-lg hover:bg-gray-100 text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <nav class="space-y-2">
              <button
                v-for="link in links"
                :key="link.id"
                type="button"
                class="w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
                @click="scrollToMobile(link.id)"
              >
                {{ link.label }}
              </button>
            </nav>

            <div class="mt-10">
              <button
                type="button"
                @click="handleBookMobile"
                class="w-full px-4 py-3 bg-black text-[#FFFDE1] rounded-full font-semibold hover:bg-gray-900 transition shadow-sm"
              >
                Book Now
              </button>
            </div>
          </aside>
        </transition>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const emit = defineEmits(['book'])

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { id: 'home', label: 'Home' },
  { id: 'cars', label: 'Cars' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function scrollToMobile(id) {
  closeMobileMenu()
  setTimeout(() => scrollTo(id), 200)
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
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
