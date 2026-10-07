export function generateWhatsAppLink(productTitle, productPrice, selectedSize, selectedColor) {
  const phoneNumber = '01620839283';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const message = `Hello ROVIX,\nI would like to order this item:\n\n*Product:* ${productTitle}\n*Price:* ৳${productPrice}\n*Size:* ${selectedSize || 'N/A'}\n*Color:* ${selectedColor || 'N/A'}\n\n*Link:* ${currentUrl}`;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
