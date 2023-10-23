import { ProductModel } from '../models/product.model.js'
import { validateString } from '../validations/string.validations.js'

// Create product
export const createProduct = async (request, response, next) => {
  try {
    const product = request.body
    for (const key in product) {
      if (typeof product[key] === 'string') {
        const validation = {
          text: product[key],
          length: 4
        }

        if (!validateString(validation)) {
          return response.status(400).send({ error: `${key} is a wrong string` })
        }
      }
    }

    const createdProduct = await ProductModel.create({ ...product })
    return response.status(200).send({ product: createdProduct })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Get products by user
export const getProducts = async (request, response, next) => {
  try {
    const products = await ProductModel.find()
    return response.status(200).send({ products })
  } catch (error) {
    console.log(error)
    response.status(400).send({ error })
    next()
  }
}

// Update product
export const updateProduct = async (request, response, next) => {
  try {
    const product = request.body

    for (const key in product) {
      if (typeof product[key] === 'string') {
        const validation = {
          text: product[key],
          length: 4
        }

        if (!validateString(validation)) {
          return response.status(400).send({ error: `${key} is a wrong string` })
        }
      }
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(product._id, product, { new: true })
    return response.status(200).send({ product: updatedProduct })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Delete product
export const deleteProduct = async (request, response, next) => {
  try {
    const { productId } = request.params
    const product = await ProductModel.findByIdAndDelete(productId)

    if (!product) {
      return response.status(400).send({ error: 'Entered id not exists' })
    }

    return response.status(200).send({ product })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}
