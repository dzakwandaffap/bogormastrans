<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-500 via-black to-gray-900">
    <!-- Background glow -->
    <div class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-white"></div>
    <div class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[#FFFDE1]"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <!-- Card -->
      <div class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md shadow-2xl">
        <div class="p-8 sm:p-10">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 border border-white/10">
            <span class="h-2 w-2 rounded-full bg-[#FFFDE1]"></span>
            <span class="text-xs font-bold tracking-wider text-white/80">ERROR</span>
          </div>

          <div class="mt-6">
            <p class="text-[#FFFDE1] font-extrabold text-6xl sm:text-7xl leading-none">404</p>
            <h1 class="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              Halaman tidak ditemukan
            </h1>
            <p class="mt-3 text-white/70 text-base sm:text-lg">
              Link yang Anda buka tidak tersedia atau sudah dipindahkan. Silakan kembali ke halaman utama.
            </p>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <RouterLink
              to="/"
              class="inline-flex items-center justify-center rounded-xl bg-[#FFFDE1] text-black px-6 py-3 font-extrabold hover:bg-white transition"
            >
              Kembali ke Beranda
            </RouterLink>

            <button
              type="button"
              @click="goBack"
              class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white px-6 py-3 font-extrabold hover:bg-white/10 transition"
            >
              Kembali ke Halaman Sebelumnya
            </button>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            Jika ini kesalahan, silakan hubungi admin.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  // kalau user langsung masuk dari link luar dan tidak punya history,
  // fallback tetap ke home
  if (window.history.length > 1) router.back()
  else router.push('/')
}
</script>
