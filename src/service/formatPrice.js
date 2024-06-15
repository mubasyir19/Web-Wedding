export const formatHarga = (harga) => {
  const hargaInteger = parseInt(harga);
  const hargaRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(hargaInteger);

  return hargaRupiah;
};
