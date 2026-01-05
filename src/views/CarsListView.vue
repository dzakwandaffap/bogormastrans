<template>
  <div class="min-h-screen bg-white">
    <Navbar @book="contactSupport" />
    
    <div class="pt-16 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Back Button -->
        <button 
          @click="$router.push('/')"
          class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8 transition"
        >
          <span>←</span> Back to Home
        </button>

        <!-- Header -->
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">All Cars</h1>
        <p class="text-gray-600 mb-12">Browse our complete premium fleet</p>

        <!-- Cars Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="car in allCars"
            :key="car.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100 group cursor-pointer"
            @click="$router.push(`/cars/${car.id}`)"
          >
            <!-- Car Image -->
            <div class="aspect-video overflow-hidden">
              <img 
                :src="car.image" 
                :alt="car.name" 
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
            </div>

            <!-- Car Info -->
            <div class="p-6">
              <h3 class="font-bold text-gray-900 text-xl mb-1">{{ car.name }}</h3>
              <p class="text-gray-500 text-sm mb-4">{{ car.brand }}</p>
              
              <!-- Price -->
              <div class="flex items-center justify-between mb-6">
                <div>
                  <span class="font-bold text-gray-900 text-lg">Rp {{ car.price.toLocaleString('id-ID') }}</span>
                  <span class="text-sm text-gray-500 ml-1">/day</span>
                </div>
              </div>

              <!-- Specs Quick Info -->
              <div class="flex items-center gap-4 text-xs text-gray-600 mb-6">
                <div class="flex items-center gap-1">
                  <span>👥</span>
                  <span>{{ car.specs.seats }} seats</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>⚙️</span>
                  <span>{{ car.specs.transmission }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>⛽</span>
                  <span>{{ car.specs.fuel }}</span>
                </div>
              </div>

              <!-- CTA Button -->
              <button 
                @click.stop="$router.push(`/cars/${car.id}`)"
                class="w-full px-6 py-3 bg-black text-[#FFFDE1] rounded-lg font-bold hover:bg-gray-900 transition"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { openWhatsAppBooking } from '../services/whatsapp'

const ADMIN_WA = '6287796720488'

const allCars = [
  {
    id: 1,
    name: 'BMW i4',
    brand: 'BMW',
    price: 960000,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Electric' }
  },
  {
    id: 2,
    name: 'Audi A7',
    brand: 'Audi',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Gasoline' }
  },
  {
    id: 3,
    name: 'Mercedes-Benz GLE',
    brand: 'Mercedes-Benz',
    price: 1050000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 7, transmission: 'Automatic', fuel: 'Diesel' }
  },
  {
    id: 4,
    name: 'Porsche 911',
    brand: 'Porsche',
    price: 1890000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 4, transmission: 'Automatic', fuel: 'Gasoline' }
  },
  {
    id: 5,
    name: 'BMW X5',
    brand: 'BMW',
    price: 1100000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 7, transmission: 'Automatic', fuel: 'Diesel' }
  },
  {
    id: 6,
    name: 'Audi Q8',
    brand: 'Audi',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Gasoline' }
  },
  {
    id: 7,
    name: 'Mercedes-Benz S-Class',
    brand: 'Mercedes-Benz',
    price: 1350000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Gasoline' }
  },
  {
    id: 8,
    name: 'Porsche Cayenne',
    brand: 'Porsche',
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Gasoline' }
  },
  {
    id: 9,
    name: 'BMW 7 Series',
    brand: 'BMW',
    price: 1280000,
    image: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&w=900&q=70',
    specs: { seats: 5, transmission: 'Automatic', fuel: 'Gasoline' }
  }
]

function contactSupport() {
  openWhatsAppBooking({
    phoneInternational: ADMIN_WA,
    carName: '-',
    dailyRate: 0,
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    pickupLocation: '',
    customerName: ''
  })
}
</script>