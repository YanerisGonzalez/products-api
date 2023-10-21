import { model, Schema } from 'mongoose'

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
}, { collection: 'Product' })

export const ProductModel = model('Product', productSchema)
