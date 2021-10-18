export const Currency = {
  format(value) {
    return new Intl.NumberFormat('vi-VN',
      {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      }).format(value)
  }
}
