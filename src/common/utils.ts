export const priceFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const marketCapFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const percentFormatter = new Intl.NumberFormat("en-GB", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
