export function formatPrice(price) {
    // Sayıyı tersine çevirme
    const reversedPrice = price.toString().split('').reverse().join('');
    // Her üç rakamda bir nokta ekleme
    const formattedPrice = reversedPrice.replace(/(\d{3})(?=\d)/g, '$1.');
    // Tekrar tersine çevirme ve sonuca dönüştürme
    return `${formattedPrice.split('').reverse().join('')} TL`;
}