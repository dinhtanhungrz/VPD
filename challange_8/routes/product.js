const router = require("express").Router();

const productController = require("../controller/productController");


router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);

module.exports = router;