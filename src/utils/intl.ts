/**
 * @param price representing USD unit value to be formatted
 * @returns string en-US Intl formatted price value in USD,
 * or `null` if falsy `price` was provided
 */
export const formatPrice = (price: number): string | null =>
  price
    ? Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    : null
