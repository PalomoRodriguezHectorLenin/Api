import {Router} from 'express'
const router = Router()

import * as productsCtrl from '../controllers/pruducts.controller'

router.post('/', productsCtrl.createProducts)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.get('/:productId', productsCtrl.updateProductbyId)
router.delete('/:productId', productsCtrl.deleteProductById)

export default router;