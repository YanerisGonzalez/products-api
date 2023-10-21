import { Router } from 'express'
import { createProduct, deleteProduct, updateProduct, getProducts } from '../controllers/product.controller.js'

const router = Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.put('/', updateProduct)
router.delete('/:productId', deleteProduct)

export default router
