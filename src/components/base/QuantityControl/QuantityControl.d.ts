export type QuantityControlProps = {
  alignStart?: boolean
  className?: string
  maxQuantity?: number
  selectedQuantity?: number
  onClick?(args): void
  onQuantityChange?(newQuantity?: number): void
}
