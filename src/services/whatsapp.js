export const openWhatsAppBooking = (data) => {
  const {
    phoneInternational,
    carName,
    dailyRate,
    pickupDate,
    pickupTime,
    dropoffDate,
    pickupLocation,
    customerName
  } = data

  let message = `Hi, saya tertarik menyewa mobil\n\n`
  
  if (carName && carName !== '-') {
    message += `🚗 Mobil: ${carName}\n`
  }
  
  if (dailyRate > 0) {
    message += `💰 Harga: Rp ${dailyRate.toLocaleString('id-ID')}/hari\n`
  }
  
  message += `\n📍 Lokasi Pickup: ${pickupLocation || '(belum diisi)'}\n`
  message += `📅 Tanggal Pickup: ${pickupDate || '(belum diisi)'}\n`
  message += `🕐 Jam Pickup: ${pickupTime || '(belum diisi)'}\n`
  message += `📅 Tanggal Kembali: ${dropoffDate || '(belum diisi)'}\n`
  
  if (customerName) {
    message += `\n👤 Nama: ${customerName}`
  }

  const url = `https://wa.me/${6287796720488}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}