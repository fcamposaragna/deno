import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as productsController from '../controllers/index.controller.ts';
const router = new Router();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.saveProduct);
router.get('/:id', productsController.getProductById);
export default router;