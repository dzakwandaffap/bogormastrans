// src/services/whatsapp.js
export const openWhatsAppBooking = (data) => {
  const {
    phoneInternational,
    carName,
    serviceType // 'driver', 'nodriver', atau null
  } = data

  let message = ''

  // Jika user memilih driver / no driver
  if (serviceType === 'driver') {
    message = `Hai! Saya berencana untuk memesan mobil ${carName} dengan driver, apakah saya bisa bertanya-tanya terlebih dahulu?`
  } else if (serviceType === 'nodriver') {
    message = `Hai! Saya berencana untuk memesan mobil ${carName} tanpa driver, apakah saya bisa bertanya-tanya terlebih dahulu?`
  } 
  // Jika user langsung klik Book Now tanpa memilih
  else {
    message = `Hai! Saya berencana memesan mobil ${carName}, apakah saya bisa bertanya-tanya terlebih dahulu?`
  }

  const url = `https://wa.me/${phoneInternational}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
